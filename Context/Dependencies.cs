public class Dependecies
{
    public static void RegisterServices(IServiceCollection services)
    {
        services.AddScoped<IUserDAL, UserDAL>();
    }
}