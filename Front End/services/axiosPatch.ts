import axios from "axios";
interface roomPatch {
  name?: string;
  price?: number;
  capacity?: number;
  status?: number;
}
export default async function axiosPatch(URL: string, data: roomPatch) {
  const res = await axios.patch(URL, data);
  return res;
}
