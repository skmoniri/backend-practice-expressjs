import dayjs from 'dayjs';
import { serve } from '@upstash/workflow/express';
import Subscription from '../models/subscription.model.js';
import {sendRemidenderEmail} from '../utils/send-email.js';

const REMINDERS = [7,5,2,1];

export const sendReminders = serve(async(context) =>{
    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if(!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);

    if(renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date passed for subscription ${subscription._id}. Stopping workflow.`);
        return;
    }

    for(const daysBefore of REMINDERS){
        const reminderDate = renewalDate.subtract(daysBefore, 'day');
    
        if(reminderDate.isAfter(dayjs())){
            await sleepUntilReminder(context, `${daysBefore} days before Reminder`, reminderDate);
        }

        if(dayjs().isSame(reminderDate, 'day')){
            await triggerReminder(context, `${daysBefore} days before Reminder`, subscription);
        }
         

    }
});

const fetchSubscription = async (context,subscriptionId) => {
    return await context.run('get subscription', async () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
}

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}`)
    await context.sleepUntilReminder(label, date.toDate())
}

const triggerReminder = async (context, label, subscription)=> {
    return await context.run(label, async () => {
        console.log(`Triggering ${label} reminder`);

        await sendRemidenderEmail({
            to: subscription.user.email,
            type: label,
            subscription: subscription,
        })
    })
}