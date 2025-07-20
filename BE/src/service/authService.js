import { google } from 'googleapis';
import { resolve } from 'path';

const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || resolve(__dirname, '../../../credentials.json'); 

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

async function authorizeServiceAccount() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: credentialsPath,
            scopes: SCOPES,
        });
        const client = await auth.getClient();
        return client;
    } catch (error) {
        console.error('Servis hesabı ilə autentifikasiya xətası:', error);
        throw error;
    }
}

export default { authorizeServiceAccount, SCOPES };