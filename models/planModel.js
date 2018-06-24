
const mongoose = require('mongoose');
Schema = mongoose.Schema;
const planModel = new Schema({
    plancode : {
        type : String
    },
		planname :{
            type : String
        },
		planheading : {
            type : String
        },
		plandetails : {
            type : String
        },
		planspecialmessage : {
            type : String
        },
		planthumbnail : {
            type : String
        },
		planbanner : {
            type : String
        },
		planimage : {
            type : String
        },
		ishomebannerplan : {
            type : Boolean,
            default : false
        },
		ishomehighlightplan : {
            type : Boolean,
            default : false
        },
		isspecialplan : {
            type : Boolean,
            default : false
        },
		isactive : {
            type : Boolean,
            default : true
        },
		createddate : {
            type : Date,
            default : Date.now()
        },
		createdby : {
            type : Number,
            default : 1989
        },
		modifieddate : {
            type : Date,
            default : Date.now()
        },
		modifiedby : {
            type : Number,
            default : 1989
        },
		rating : {
            type : Number
        },
		pagetitle : {
            type : Number
        },
		tooltiptext : {
            type : String
        },
		metakeywords : {
            type : String
        },
		metadescription :{
            type : String
        },
})

module.exports = mongoose.model('plans', planModel);