public class FutureValueCalculator {
    public static void main(String[] args) {
        double initialInvestment = 15000;
        double[] annualGrowthRates = {0.05, 0.04, 0.09, 0.06, 0.03, 0.02, 0.01};

        double futureValue = calculateFutureValue(initialInvestment, annualGrowthRates, 0);

        System.out.printf("Future value after %d years: %.2f\n", annualGrowthRates.length, futureValue);
    }

    public static double calculateFutureValue(double currentValue, double[] growthRates, int yearIndex) {
        if (yearIndex == growthRates.length) {
            return currentValue;
        }

        double updatedValue = currentValue * (1 + growthRates[yearIndex]);
        return calculateFutureValue(updatedValue, growthRates, yearIndex + 1);
    }
}
