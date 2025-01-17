const mongoose =require("mongoose");

const postschema = new mongoose.Schema({

    caption:String,
    image:{
        public_id:String,
        url:String,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    likes:[
            {
                type :  mongoose.Schema.Types.ObjectId ,
                ref:"User",
            },
    ],
    Comment:[
        {
            user:
            {
                type :  mongoose.Schema.Types.ObjectId ,
                ref:"User",
            },
            comment:{
                type:String,
                required:true,
            },
        },
    ],

});
module.exports= mongoose.model('Post',postschema);