import { createCalendarEvent, listCalendarEvents } from '../service/calendarService.js';
import EventModel from '../model/EventModel.js';

const createEvent = async (req, res) => {
    try {
        const { summary, description, startTime, endTime, location } = req.body;

        const eventDetails = {
            summary,
            description,
            start: {
                dateTime: new Date(startTime).toISOString(),
                timeZone: 'Asia/Baku',
            },
            end: {
                dateTime: new Date(endTime).toISOString(),
                timeZone: 'Asia/Baku',
            },
            location,
        };

        const googleEvent = await createCalendarEvent(eventDetails);

        const newEvent = new EventModel({
            googleEventId: googleEvent.id,
            summary,
            description,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            location,
        });
        await newEvent.save();

        res.status(201).json({ message: 'Tədbir uğurla yaradıldı və saxlanıldı.', googleEvent, dbEvent: newEvent });
    } catch (error) {
        console.error('Tədbir yaratma xətası:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const getEvents = async (req, res) => {
    try {
        const dbEvents = await EventModel.find({});
        const googleEvents = await listCalendarEvents('primary', 10);

        res.status(200).json({
            dbEvents: dbEvents,
            googleEvents: googleEvents
        });
    } catch (error) {
        console.error('Tədbirləri oxuma xətası:', error.message);
        res.status(500).json({ error: error.message });
    }
};

export {
    createEvent,
    getEvents,
};