import request, { Response } from "supertest";
import app from "../src/app";

// test for health api endpoint

describe("GET /api/v1/health", () => {
    it("should return server health status", async () => {
        const response: Response = await request(app).get("/api/v1/health");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");
    });
});



// test for portfolio API Endpoint

describe("GET /api/v1/portfolio/performance", () => {
    it("should calculate portfolio performance and return 200 with correct data", async () => {
        // Arrange
        const initialInvestment = 10000;
        
        
        // Act
        const response = await request(app).get("/api/v1/portfolio/performance").query({ initialInvestment, currentValue });
        
        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            initialInvestment: 10000,
            currentValue: 12000,
            profitOrLoss: 2000,
            percentageChange: 20,
            performanceSummary: expect.stringContaining("Solid gain")
        });
    });
});