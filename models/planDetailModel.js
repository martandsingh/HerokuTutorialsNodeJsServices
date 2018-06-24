const mongoose = require('mongoose')
Schema = mongoose.Schema;

const planDetailModel = new Schema({
    plancode : {
        type : String
    },
    planpackage :  {
        type : String
    },
    packagethumbnail :  {
        type : String
    },
    packagebanner :  {
        type : String
    },
    packageheading :  {
        type : String
    },
    packagedescription :  {
        type : String
    },
    planspecialmessage :  {
        type : String
    },
    packagerating :  {
        type : Number,
        default : 3
    },
    planprice :  {
        type : Number
    },
    plandiscount :  {
        type : Number,
        default : 0
    },
    isactive :  {
        type : Boolean,
        default : true
    },
    createddate :  {
        type : Date,
        default : Date.now()
    },
    createdby : {
        type : Number,
        default : 1989
    },
    modifieddate :{
        type : Date,
        default : Date.now()
    },
    modifiedby : {
        type : Number,
        default : 1989
    },
});

module.exports = mongoose.model('plandetails', planDetailModel);