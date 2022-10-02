using Versioning.DAL.Interfaces;
using Versioning.Services.Interfaces;

namespace Versioning.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IAuthenticationDAL AuthenticationDAL;

        public AuthenticationService(IAuthenticationDAL UserDAL)
        {
            this.AuthenticationDAL = UserDAL;
        }


        public ICollection<Authentication> GetAuthenticationMethods()
        {
            return this.AuthenticationDAL.GetAuthenticationMethods();
        }
    }
}
