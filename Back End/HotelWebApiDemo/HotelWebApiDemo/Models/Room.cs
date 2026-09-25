using HotelWebApiDemo.Enum;

namespace HotelWebApiDemo.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public decimal Price { get; set; }
        public int Capacity { get; set; }
        public RoomStatus Status { get; set; }
        public string Description {get;set;}
        
    }
}
