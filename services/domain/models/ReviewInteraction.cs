namespace FruitFinderDomain
{
    public class ReviewInteraction : DomainBase
    {
        public int UserId { get; set; }
        public int ReviewId { get; set; }
        public bool? Vote { get; set; }
        public string? Response { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual Review Review { get; set; } = null!;
    }
}