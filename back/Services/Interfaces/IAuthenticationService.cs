namespace Versioning.Services.Interfaces
{
    public interface IAuthenticationService
    {
        public ICollection<Authentication> GetAuthenticationMethods();
    }
}
