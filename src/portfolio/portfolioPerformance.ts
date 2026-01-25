export interface PorfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}



export function calculatePortfolioPerformance(): any {
    let initialInvestment = 10000;
    let currentValue = 12000;

    // Calculates the profit or loss
    const profitOrLoss = currentValue - initialInvestment;

    // Calculates the percentage change
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    // Rounding to two decimal places using Math.round
    const roundedPercentage = Math.round(percentageChange * 100) / 100

    // I decided to use ternary operators
    const performanceSummary =
        roundedPercentage >= 30 ? "Excellent performance! Your investments are doing great.":
        roundedPercentage >= 10 ? "Solid gain. Keep monitoring your investments.":
        roundedPercentage > 0 ? "Modest gain. Your portfolio is growing slowly.":
        roundedPercentage === 0 ? "No change. your portfolio is holding steady.":
        roundedPercentage >= -10 ? "Minor loss. Stay calm and review your options.":
        "Significant loss. Review your portfolio strategy.";


    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}
