import axios from "axios";
export default async function axiosDelete(url: string) {
  const res = await axios.delete(url);
  return res;
}
