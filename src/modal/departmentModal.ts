import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

const jwtToken:any = process.env.JWTSECRET_KEY;
const deptSchema = new Schema({
    deptName:{
        type :String,
        required : true
    },
    schemeName:{
        type :Array
    },
    IsActive:{
        type:Boolean,
        default:true
    }
},
{ timestamps: true }
)
var deptModal = mongoose.model('department', deptSchema)
export default deptModal;