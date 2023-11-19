import mongoose from 'mongoose';

export interface AppUserDocument extends mongoose.Document {
    username: string,
    lastname: string,
    age : number;
    role: string,
    email: string,
    password: string
}

const AppUserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: false,
        //required: [true, '']
    },
    lastname: {
        type: String,
        unique: false
    },
    age: {
        type: Number,
    },
    role: {
        type: String,
        default: 'user',
        required: true
    },
    email: {
        type: String,
        minLength: 6,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

export const AppUserModel = mongoose.model<AppUserDocument>('appuser', AppUserSchema)