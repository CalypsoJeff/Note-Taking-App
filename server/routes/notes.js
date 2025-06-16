import express from 'express';
import { createNote, getAllNotes } from '../controllers/noteController.js';

const router = express.Router();

router.post('/', createNote);
router.get('/', getAllNotes);

export default router;
