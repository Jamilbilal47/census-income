// services/censusAPI.ts

const STATE_FIPS: Record<string, string> = {
  "Alabama": "01", "Alaska": "02", "Arizona": "04", "Arkansas": "05", "California": "06",
  "Colorado": "08", "Connecticut": "09", "Delaware": "10", "Florida": "12", "Georgia": "13",
  "Hawaii": "15", "Idaho": "16", "Illinois": "17", "Indiana": "18", "Iowa": "19",
  "Kansas": "20", "Kentucky": "21", "Louisiana": "22", "Maine": "23", "Maryland": "24",
  "Massachusetts": "25", "Michigan": "26", "Minnesota": "27", "Mississippi": "28", "Missouri": "29",
  "Montana": "30", "Nebraska": "31", "Nevada": "32", "New Hampshire": "33", "New Jersey": "34",
  "New Mexico": "35", "New York": "36", "North Carolina": "37", "North Dakota": "38", "Ohio": "39",
  "Oklahoma": "40", "Oregon": "41", "Pennsylvania": "42", "Rhode Island": "44", "South Carolina": "45",
  "South Dakota": "46", "Tennessee": "47", "Texas": "48", "Utah": "49", "Vermont": "50",
  "Virginia": "51", "Washington": "53", "West Virginia": "54", "Wisconsin": "55", "Wyoming": "56"
};

const CENSUS_API_KEY = "26bb1bd6ca033c20981620d43606c88add9490ac";

export async function getStateAverageIncome(state: string): Promise<number | null> {
  const normalizedState = state.trim().toLowerCase();
  const fipsCode = Object.entries(STATE_FIPS).find(([key]) => key.toLowerCase() === normalizedState)?.[1];
  if (!fipsCode) {
    throw new Error(`Invalid state name: ${state}`);
  }

  const url = `https://api.census.gov/data/2022/acs/acs5?get=NAME,B19013_001E&for=state:${fipsCode}&key=${CENSUS_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 1 && data[1][1]) {
      const income = parseInt(data[1][1], 10);
      return isNaN(income) ? null : income;
    }
    return null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}


// Mock function to simulate fetching income data from Census.gov
export const fetchIncomeData = async (location: string) => {

  // Mock data based on location
  const mockData: Record<string, { userIncome: number; regionalIncome: number }> = {
    'New York, NY': { userIncome: 75000, regionalIncome: 88000 },
    'San Francisco, CA': { userIncome: 120000, regionalIncome: 110000 },
    'Chicago, IL': { userIncome: 65000, regionalIncome: 70000 },
    'Austin, TX': { userIncome: 80000, regionalIncome: 85000 },
    'Punjab': {userIncome: 300000, regionalIncome: 400000}
  };

  console.log('Fetching income data for:', location);

  const income = await getStateAverageIncome(location);

  // const data = mockData[location];

  if (!income) {
    throw new Error('Location not found.');
  }

  return income;
};