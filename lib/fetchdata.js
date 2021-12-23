const axios = require("axios").default;

export async function fetchData() {
  const ranges = ["C1:L100", "N1:S6"];
  const data_array = [];
  for (const range of ranges) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID}/values/${range}?key=${process.env.GOOGLE_API_KEY}`;
    const res = await axios.get(url);
    const data = res.data.values.slice(1); // remove header rows from response
    data_array.push(data);
  }
  return data_array;
}

// Usage:
// const [portfolio_data, transaction_data] = await fetchData();

export async function getNumberSold() {
  const range = "F2:F2";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_6554_ID}/values/${range}?key=${process.env.GOOGLE_API_KEY}`;
  const res = await axios.get(url);
  return res.data.values[0][0];
}
