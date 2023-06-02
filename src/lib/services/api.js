import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Connecting to local application
const api = axios.create({});

export default api;
