// src/api/notesApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/notes';

export const getAllNotes = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const createNote = async (noteData) => {
    const response = await axios.post(API_BASE_URL, noteData);
    return response.data;
};
