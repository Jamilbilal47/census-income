// utils/calculatePercentage.ts

// Calculate the user's income as a percentage of the regional average
export const calculatePercentage = (userIncome: number, regionalIncome: number): string => {
  if (regionalIncome === 0) {
    return '0.00'; // Avoid division by zero
  }
  return ((userIncome / regionalIncome) * 100).toFixed(2);
};