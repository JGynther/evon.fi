const axios = require('axios').default

export default async function fetchData() {
    const ranges = ["C1:L100"]
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID}/values/${ranges[0]}?key=${process.env.GOOGLE_API_KEY}`
    const data = await axios.get(url)
    return data.data.values.slice(1)
}