import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
    googleEventId: {
        type: String,
        unique: true,
        sparse: true
    },
    summary: {
        type: String,
        required: true
    },
    description: String,
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    location: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Event = model('Event', eventSchema);

export default Event;