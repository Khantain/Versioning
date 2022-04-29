using Microsoft.EntityFrameworkCore;

public class DBContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=KHANT;Initial Catalog=versioning;Integrated Security=True");
        }
        public DbSet<User> Users { get; set; }
    }