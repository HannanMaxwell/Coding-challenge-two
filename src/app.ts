import express, { Express } from "express";
import eventRoutes from './api/v1/routes/eventRoutes';

let app: Express = express();

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.use('/api/v1/events', eventRoutes);



export default app;