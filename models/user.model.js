import mongoose from 'mongoose'

const userShema = new mongoose.Schema({
    name: { type: String, 
    required: [true, 'User Name is required'],
    trim: true,
    minLength: 2,
    MaxLength: 50,
    },
    email:{ type: String, 
    required: [true, 'User Email is required'],
    trim: true,
    lowercase:true,
    match: [/\S+@\S+\.\S+/,'Please fill a valid eamil address'],
    },
    password: {
        type: String,
        required:[true,'User Password is required'],
        trimm: true,
        minLength: 6,
    }
},{timestamps: true})

const User = mongoose.model('User', userShema)

export default User;