using HotelWebApiDemo.Enum;
using System.ComponentModel.DataAnnotations;

namespace HotelWebApiDemo.Models
{
    public class RoomPatchDto
    {
        [Required]
        public RoomStatus Status { get; set; }
    }
}
