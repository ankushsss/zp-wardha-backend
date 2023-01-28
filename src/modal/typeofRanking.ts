import mongoose, { Schema } from 'mongoose'

const rankSchema = new Schema({
    number1to10Rank:{
        type :String, 
        default: 'user',
        enum: ["user", "admin", "superadmin","officer", "surveyer"]
    },
    number2to20Rank:{
        type :String, 
        default: 'user',
        enum: ["user", "admin", "superadmin","officer", "surveyer"]
    },
    greaterThanLessThank:{
        
    }
},
{ timestamps: true }
)
var rankModal = mongoose.model('rank', rankSchema)
export default rankModal;