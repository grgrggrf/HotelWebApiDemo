using HotelWebApiDemo.Enum;
using System.ComponentModel.DataAnnotations;

namespace HotelWebApiDemo.Models
{
    public class RoomPutDto
    {
        [Required]
        public string Name { get; set; } = "";
        [Range(0, 10000)]
        public decimal Price { get; set; }
        [Range(1, 8)]
        public int Capacity { get; set; }
  
        public RoomStatus Status { get; set; }
    }
}
