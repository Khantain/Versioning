using Versioning.DAL.Interfaces;
using Versioning.DAL.Services;
using Versioning.Services.Interfaces;
using Versioning.Services;

public class Dependecies
{
    public static void RegisterServices(IServiceCollection services)
    {
        services.AddScoped<IUserDAL, UserDAL>();
        services.AddScoped<IAuthenticationDAL, AuthenticationDAL>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IAuthenticationService, AuthenticationService>();
    }
}