using Microsoft.AspNetCore.Mvc;

namespace Versioning.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserDAL UserDAL;

        public UserController(IUserDAL UserDAL)
        {
            this.UserDAL = UserDAL;
        }

        [HttpGet(Name = "GetUsers")]
        public IEnumerable<User> Get()
        {
            return this.UserDAL.GetUsers();
        }
    }
}