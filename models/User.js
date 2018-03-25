const mongooose = require('mongoose');
const Schema = mongooose.Schema;

//Create Schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
});
 mongooose.model('users', UserSchema);
