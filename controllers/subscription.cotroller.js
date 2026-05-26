import Subscription from '../models/subscription.model.js';
import {workflowClient} from '../config/upstash.js';
import {SERVER_URL} from '../config/env.js';
export const createSubscription = async (req,res,next) => {
    try{    
        const subscriptionData = await Subscription.createSubscription({
             ...req.body,
             user: req.user._id,
            });

            await workflowClient.trigger({
                url: `${SERVER_URL}/api/v1/workflows/reminder`,
            });

            res.status(201).json({
                success: true,
                data: subscriptionData,
            })
    }catch(e){
        next(e)
    }
}

export const getUserSubscriptions = async (req,res,next) => {
    try {
        if(req.user.id !== req.params.id){
            const error = new error('You are not the owner of this account') ;
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({user: req.params.id});
        res.status(200).json({
            success: true,
            data: subscriptions,
        })
    }catch(e){
        next(e);
    }
}