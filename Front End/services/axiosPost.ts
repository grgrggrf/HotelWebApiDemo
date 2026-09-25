import axios from "axios";

export default async function axiosPost(url: string, data: object) {
  const res = await axios.post(url, data);
  return res;
}
