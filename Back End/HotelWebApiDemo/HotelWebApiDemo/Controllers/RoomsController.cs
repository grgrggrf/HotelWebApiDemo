using HotelWebApiDemo.Models;

using Microsoft.AspNetCore.Mvc;
using HotelWebApiDemo.Enum;
using HotelWebApiDemo.Service;
namespace HotelWebApiDemo.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private static List<Room> rooms = new List<Room>()
        {
            new()
            {
                Id = 1,
                Name = "201",
                Price = 199,
                Capacity = 2,
                Status = RoomStatus.Available
            },
            new()
            {
                Id = 5,
                Name = "101",
                Price = 200,
                Capacity = 2,
                Status = RoomStatus.Available
            },
                 new()
            {
                Id = 3,
                Name = "301",
                Price = 200,
                Capacity = 2,
                Status = RoomStatus.Available
            },
            new()
            {
                Id = 9999,
                Name = "9901",
                Price = 999999,
                Capacity = 2,
                Status = RoomStatus.Available
            },

        };
        [HttpGet]
        public IActionResult GetRooms()
        {


            return Ok(rooms);
        }
        [HttpGet("{Id}")]
        public IActionResult GetRoomById([FromRoute] int Id)
        {

            var roomId = rooms.FirstOrDefault(r => r.Id == Id);

            return Ok(roomId);
        }
        [HttpPut("{Id}")]
        public IActionResult UpdateRoom(
      [FromRoute] int Id,
      [FromBody] RoomPutDto room)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    throw new BusinessException("填写的数据不符合要求！");
                }

                var roomId = rooms.FirstOrDefault(r => r.Id == Id);

                if (roomId == null)
                {
                    throw new Exception("房间Id不存在！");
                }

                roomId.Name = room.Name;
                roomId.Price = room.Price;
                roomId.Capacity = room.Capacity;
                roomId.Status = room.Status;

                return Ok(roomId);
            }
            catch (BusinessException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
        [HttpPatch("{Id}")]
        public IActionResult UpPatchRoom(
    [FromRoute] int Id,
    [FromBody] RoomPatchDto room)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    throw new BusinessException("填写的数据不符合要求！");
                }

                var roomId = rooms.FirstOrDefault(r => r.Id == Id);

                if (roomId == null)
                {
                    throw new Exception("房间Id不存在！");
                }

                roomId.Status = room.Status;

                return Ok(roomId);
            }
            catch (BusinessException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteRoom([FromRoute] int id)
        {
            try
            {
                var room = rooms.FirstOrDefault(r => r.Id == id);

                if (room == null)
                {
                    throw new Exception("房间Id不存在无法删除!");
                }

                rooms.Remove(room);

                return NoContent();
            }
            catch (Exception ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }
    }
}
