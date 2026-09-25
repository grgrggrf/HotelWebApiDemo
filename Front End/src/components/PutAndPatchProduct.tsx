import { useState } from "react";
import axiosPut from "../../services/axiosPut";
import axiosPatch from "../../services/axiosPatch";
function PutAndPatchProduct() {
  const [roomId, setRoomId] = useState<number>(0);
  const [roomName, SetRoomName] = useState("");
  const [roomPrice, SetRoomPrice] = useState(0);
  const [roomCapacity, SetRoomCapacity] = useState(0);
  const [roomStatus, SetRoomStatus] = useState(0);
  async function handleUpdate(e) {
    e.preventDefault();
    try {
      if (!roomId) {
        throw new Error("房间号是必填的！");
      }
      const putRoom = await axiosPut(
        `https://localhost:7234/api/Rooms/${roomId}`,
        {
          name: roomName,
          price: roomPrice,
          capacity: roomCapacity,
          status: roomStatus,
        },
      );
      console.log(putRoom);
      return putRoom;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log("要修改的房间Id不存在!");
        }
      }
      console.log(error);
    }
  }
  async function handlePatch(e) {
    e.preventDefault();
    try {
      if (!roomId) {
        throw new Error("房间号是必填的！");
      }
      const PatchRoom = await axiosPatch(
        `https://localhost:7234/api/Rooms/${roomId}`,
        {
          status: roomStatus,
        },
      );
      console.log(PatchRoom);
      return PatchRoom;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log("要修改的房间Id不存在!");
        }
      }
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleUpdate}>
        <input
          value={roomId}
          onChange={(e) => setRoomId(Number(e.target.value))}
          placeholder="请输入房间ID"
        />
        <input
          value={roomName}
          onChange={(e) => SetRoomName(e.target.value)}
          placeholder="请输入房间号"
        />
        <input
          value={roomPrice}
          onChange={(e) => SetRoomPrice(Number(e.target.value))}
          placeholder="请输入房间价格"
        />
        <input
          value={roomCapacity}
          onChange={(e) => SetRoomCapacity(Number(e.target.value))}
          placeholder="请输入房间最大入住数"
        />
        <input
          value={roomStatus}
          onChange={(e) => SetRoomStatus(Number(e.target.value))}
          placeholder="请输入房间的状态,只允许填写三个值(可入住:Available 已被入住:Occupied 清洁中:Cleaning)"
        />
        <button>修改全部</button>
      </form>
      <form onSubmit={handlePatch}>
        <input
          value={roomId}
          onChange={(e) => setRoomId(Number(e.target.value))}
          placeholder="请输入房间ID"
        />
        <input
          value={roomStatus}
          onChange={(e) => SetRoomStatus(Number(e.target.value))}
          placeholder="请输入房间的状态,只允许填写三个值(可入住:Available 已被入住:Occupied 清洁中:Cleaning)"
        />
        <button>修改部分</button>
      </form>
    </>
  );
}
export default PutAndPatchProduct;
