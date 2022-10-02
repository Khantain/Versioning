using Versioning.Services.Interfaces;

namespace Versioning.Services
{
    public class UserService : IUserService
    {
        private readonly IUserDAL UserDAL;

        public UserService(IUserDAL UserDAL)
        {
            this.UserDAL = UserDAL;
        }


        public ICollection<User> GetUsers()
        {
            return this.UserDAL.GetUsers();
        }
    }
}
