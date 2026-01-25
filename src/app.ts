import express, { Express } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

let app: Express = express();

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.get("/api/v1/portfolio/performance", (req, res) => {
    const initialInvestment = parseFloat(req.query.initialInvestment as string);
    const currentValue = parseFloat(req.query.currentValue as string);

    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(result);
    
});



export default app;