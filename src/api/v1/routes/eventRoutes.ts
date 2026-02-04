import { Router } from 'express';
import { getEvents, getEvent, getEventPopularity } from '../controllers/eventController';

const router = Router();

router.get('/', getEvents);
router.get('/:id', getEvent);
router.get('/:id/popularity', getEventPopularity);

export default router;