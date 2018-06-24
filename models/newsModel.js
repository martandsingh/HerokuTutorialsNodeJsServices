const mongoose = require('mongoose'),
Schema = mongoose.Schema;

var newsModel = new Schema({
    newsDate : {
        type: Date
    },
    newsHeading: {
        type: String
    },
    newsDescription: {
        type: String
    },
    isActive: {
        type: Boolean

        
    }
});

module.exports = mongoose.model('latestnews', newsModel);