import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : import.meta.env.VITE_URL_WS;
// You would need to create an .env.local file with the url for VITE_URL_WS

export const socket = io(URL);
