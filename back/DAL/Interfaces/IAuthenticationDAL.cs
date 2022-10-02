namespace Versioning.DAL.Interfaces
{
    public interface IAuthenticationDAL
    {
        public ICollection<Authentication> GetAuthenticationMethods();
    }
}
