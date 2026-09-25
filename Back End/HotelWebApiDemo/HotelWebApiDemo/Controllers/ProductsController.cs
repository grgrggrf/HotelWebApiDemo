using HotelWebApiDemo.Models;
using Microsoft.AspNetCore.Mvc;
using HotelWebApiDemo.Service;
namespace HotelWebApiDemo.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private static List<Products> products = new()
{
    new Products { Id = 1, Name = "电脑", Price = 5999 },
    new Products { Id = 2, Name = "手机", Price = 4888 },
    new Products { Id = 3, Name = "笔记本电脑", Price = 8999 }
};

        [HttpGet]
        public IActionResult GetProducts()
        {
        
            return Ok(products);
        }
        [HttpPost]
        public IActionResult CreateProduct(Products product)
        {
            try
            {
                if (product == null)
                {
                    
                    throw new Exception("发送的数据不符合规范！");
                }
                if (product.Price <= 0)
                {
                    
                    throw new BusinessException("价格必须大于0");

                }

                product.Id = products.Count + 1;

                products.Add(product);
                return Created("", product);
            }
            catch (BusinessException ex) { return BadRequest(new { message = ex.Message }); }
            catch (Exception ex)
            {
               
                return BadRequest(new { message =ex.Message });
            }
        }
    }
}
