
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";


describe('calculatePortfolioPerformance', () => {
    it('should calculate profit/loss and percentage correctly', () => {
        // Arrange
        const initialInvestment = 10000;
        const currentValue = 12000;
        const expectedProfit = 2000;
        const expectedPercentage = 20;

        // Act
        const result = calculatePortfolioPerformance(initialInvestment, currentValue);

        // Assert
        expect(result.profitOrLoss).toBe(expectedProfit);
        expect(result.percentageChange).toBe(expectedPercentage);
    });

    it('should return correct message for gains', () => {
        // Arrange
        const initialInvestment = 10000;
        const excellentValue = 16000;
        const solidValue = 11000;
        const moderateValue = 10500;

        // Act
        const excellentResult = calculatePortfolioPerformance(initialInvestment, excellentValue);
        const solidResult = calculatePortfolioPerformance(initialInvestment, solidValue);
        const moderateResult = calculatePortfolioPerformance(initialInvestment, moderateValue);
        
        // Assert
        expect(excellentResult.performanceSummary).toContain('Excellent');
        expect(solidResult.performanceSummary).toContain('Solid gain');
        expect(moderateResult.performanceSummary).toContain('Modest');
    });

    it('should return correct message for losses', () => {
        // Arrange
        const initialInvestment = 10000;
        const minorLossValue = 9500;   
        const bigLossValue = 8500;     
        
        // Act
        const minorLossResult = calculatePortfolioPerformance(initialInvestment, minorLossValue);
        const bigLossResult = calculatePortfolioPerformance(initialInvestment, bigLossValue);
        
        // Assert
        expect(minorLossResult.performanceSummary).toContain('Minor loss');
        expect(bigLossResult.performanceSummary).toContain('Significant loss');
    });

});

