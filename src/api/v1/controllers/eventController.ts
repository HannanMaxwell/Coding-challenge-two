//imports
import { Request, Response } from 'express';
import { EventService } from '../services/eventService';
import { HTTP_STATUS } from '../../../constants/httpConstants';

const service = new EventService();

export const getEvents = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({ events: service.getAll(), count: service.getAll().length });
};

export const getEvent = (req: Request, res: Response) => {
    const event = service.getOne(parseInt(req.params.id as string));
    if (!event) return res.status(HTTP_STATUS.NOT_FOUND).json({ error: "Event not found" });
    res.json(event);
};

export const getEventPopularity = (req: Request, res: Response) => {
    const result = service.getPopularity(parseInt(req.params.id as string));
    if (!result) return res.status(HTTP_STATUS.NOT_FOUND).json({ error: "Event not found" });
    res.json(result);
};