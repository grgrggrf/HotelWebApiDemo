import axios from "axios";
interface roomPut {
  name: string;
  price: number;
  capacity: number;
  status: number;
}
export default async function axiosPut(URL: string, data: roomPut) {
  const res = await axios.put(URL, data);
  return res;
}
