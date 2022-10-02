using Versioning.DAL.Interfaces;

namespace Versioning.DAL.Services
{
    public class AuthenticationDAL : IAuthenticationDAL
    {
        private readonly DBContext DbContext;

        public AuthenticationDAL(DBContext DbContext)
        {
            this.DbContext = DbContext;
        }

        public ICollection<Authentication> GetAuthenticationMethods()
        {
            return DbContext.Authentications.ToList();
        }
    }
}
