export const normalizeIncomeData = (income: number): number => {
  return Math.round(income / 1000) * 1000;
};