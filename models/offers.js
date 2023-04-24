const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    logoBackground: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    contract: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    apply: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        content: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    role: {
        content: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
});

module.exports = mongoose.model('Offer', offerSchema);
