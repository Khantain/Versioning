using Microsoft.AspNetCore.Mvc;
using Versioning.Services.Interfaces;

namespace Versioning.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService AuthenticationService;

        public AuthenticationController(IAuthenticationService UserDAL)
        {
            this.AuthenticationService = UserDAL;
        }

        [HttpGet(Name = "GetAUthentications")]
        public IEnumerable<Authentication> Get()
        {
            return this.AuthenticationService.GetAuthenticationMethods();
        }
    }
}
