public class UserDAL : IUserDAL
{
    private DBContext DbContext;
    public UserDAL(DBContext DbContext)
    {
        this.DbContext = DbContext;
    }
    public ICollection<User> GetUsers()
    {
        return DbContext.Users.ToList();
    }
}