import { google } from 'googleapis';
import authService from './authService.js';

const getAuthenticatedClient = async () => {
    try {
        return await authService.authorizeServiceAccount();
    } catch (error) {
        console.error("AuthService-dən autentifikasiya client-i alınarkən xəta:", error);
        throw error;
    }
};

async function createCalendarEvent(event) {
    try {
        const authClient = await getAuthenticatedClient(); 
        const calendar = google.calendar({ version: 'v3', auth: authClient });

        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
        });
        return response.data;
    } catch (error) {
        console.error('Google Calendar tədbirini yaratarkən xəta:', error);
        throw error;
    }
}

async function listCalendarEvents(calendarId = 'primary', maxResults = 10) {
    try {
        const authClient = await getAuthenticatedClient(); 
        const calendar = google.calendar({ version: 'v3', auth: authClient });

        const response = await calendar.events.list({
            calendarId: calendarId,
            timeMin: new Date().toISOString(),
            maxResults: maxResults,
            singleEvents: true,
            orderBy: 'startTime',
        });
        return response.data.items;
    } catch (error) {
        console.error('Google Calendar tədbirlərini oxunarkən xəta:', error);
        throw error;
    }
}

export {
    createCalendarEvent,
    listCalendarEvents,
};