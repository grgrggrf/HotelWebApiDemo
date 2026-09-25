import axios from "axios";

export default async function axiosGet(url: string) {
  const res = await axios.get(url);
  return res;
}
