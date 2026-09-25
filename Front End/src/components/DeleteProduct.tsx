import { useState } from "react";
import axiosDelete from "../../services/axiosDelete.ts";
function DeleteProduct() {
  const [roomId, setRoomId] = useState<number | "">("");
  async function handleDelete(e) {
    e.preventDefault();
    try {
      if (roomId === "") {
        throw new Error("房间号是必填的！");
      }
      const deleteRoom = await axiosDelete(
        `https://localhost:7234/api/Rooms/${roomId}`,
      );
      console.log(`删除成功,删除ID为${roomId}`);
      setRoomId("");
      return deleteRoom;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log("要删除的房间Id不存在!");
        }
      }
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={handleDelete}>
        <span>请输入要删除的房间号:</span>

        <input
          type="number"
          value={roomId}
          onChange={(e) => {
            const value = e.target.value;
            setRoomId(value === "" ? "" : Number(value));
          }}
        />
        <button>删除房间号</button>
      </form>
    </>
  );
}
export default DeleteProduct;
