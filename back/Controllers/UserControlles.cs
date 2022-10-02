using Microsoft.AspNetCore.Mvc;
using Versioning.Services.Interfaces;

namespace Versioning.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService UserService;

        public UserController(IUserService UserService)
        {
            this.UserService = UserService;
        }

        [HttpGet(Name = "GetUsers")]
        public IEnumerable<User> Get()
        {
            return this.UserService.GetUsers();
        }
    }
}