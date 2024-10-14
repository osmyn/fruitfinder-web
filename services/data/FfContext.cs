using FruitFinderDomain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Identity.Client;

namespace FruitFinderData
{
    public class FfContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Fruit> Fruits { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<AuditLog> AuditLogs { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<ReviewInteraction> ReviewInteractions { get; set; }

        public FfContext()
        {
            // Needed for EF Core Power Tools
        }

        public FfContext(DbContextOptions<FfContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(
            DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Needed for EF Core Power Tools
                optionsBuilder.UseSqlServer("Data Source=.");
            }
        }


        protected override void ConfigureConventions(
            ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<string>().HaveMaxLength(255);
            configurationBuilder.Properties<string>()
                .HaveColumnType("varchar(255)");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var account = modelBuilder.Entity<Account>();
            account.HasKey(a => a.Id);
            account.Property(a => a.CompoundId).IsRequired();
            account.Property(a => a.UserId).IsRequired();
            account.Property(a => a.ProviderType).IsRequired();
            account.Property(a => a.ProviderId).IsRequired();
            account.Property(a => a.ProviderAccountId).IsRequired();
            account.Property(a => a.RefreshToken).HasColumnType("text");
            account.Property(a => a.AccessToken).HasColumnType("text");

            var fruit = modelBuilder.Entity<Fruit>();
            fruit.HasKey(f => f.Id);
            fruit.Property(f => f.PLU).IsRequired();
            fruit.Property(f => f.Category).IsRequired()
                .HasConversion<string>();
            fruit.Property(f => f.Commodity).IsRequired();
            fruit.Property(f => f.Variety).IsRequired();
            fruit.Property(f => f.Size).IsRequired()
                .HasConversion<string>();

            var user = modelBuilder.Entity<User>();
            user.HasKey(u => u.Id);
            user.Property(u => u.Name).IsRequired();
            user.Property(u => u.Email).IsRequired();
            user.Property(u => u.Zipcode).IsRequired();

            var auditLog = modelBuilder.Entity<AuditLog>();
            auditLog.HasKey(a => a.Id);
            auditLog.Property(a => a.Message).IsRequired();
            auditLog.Property(a => a.Type).IsRequired()
                .HasConversion<string>();

            var review = modelBuilder.Entity<Review>();
            review.HasKey(r => r.Id);
            review.Property(r => r.UserId).IsRequired();
            review.Property(r => r.FruitId).IsRequired();
            review.Property(r => r.Rating).IsRequired();
            review.Property(r => r.Price).HasPrecision(18, 2);
            review.Property(r => r.Description).IsRequired();
            review.Property(r => r.ImageStatus).HasConversion<string>();

            var reviewInteraction = modelBuilder.Entity<ReviewInteraction>();
            reviewInteraction.HasKey(ri => ri.Id);
            reviewInteraction.Property(ri => ri.UserId).IsRequired();
            reviewInteraction.Property(ri => ri.ReviewId).IsRequired();
            reviewInteraction.Property(ri => ri.Vote).IsRequired();
            modelBuilder.Entity<ReviewInteraction>()
                .HasOne(ri => ri.User)
                .WithMany(u => u.ReviewInteractions)
                .HasForeignKey(ri => ri.UserId)
                .OnDelete(DeleteBehavior
                    .NoAction); // Delete will flow through Review table
        }
    }
}