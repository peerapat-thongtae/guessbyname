import axios from "axios";

  
const NATIONALIZE_API_URL = "https://api.nationalize.io/";

export const GuessNationalize = async (name) => {
  const res = await axios.get(`${NATIONALIZE_API_URL}?name=${name}`);
  console.log(res.data);
  return res.data;
}