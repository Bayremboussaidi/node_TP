//Create model of user Document
const mongoose = require ('mongoose');
const bcrypte = require ('bcryptjs'); //hashage de password
const userSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    password :String
})

//hashage password before save
userSchema.pre('save',async function(next){
    const user = this; // prend le contenu avant d etre enregistré
    if (user.isModified('password')){
        user.password = await bcrypte.hash(user.password,10)
    }
    next();
})

const User = mongoose.model('User',userSchema)
module.exports = User;