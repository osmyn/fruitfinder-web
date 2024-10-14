namespace FruitFinderDomain
{
    public class Review : DomainBase
    {
        public int UserId { get; set; }
        public int FruitId { get; set; }
        public int Rating { get; set; }
        public string? ImageUrl { get; set; }
        public ImageStatus ImageStatus { get; set; }
        public string? ImageRejectedReason { get; set; }
        public string? Provenance { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; } = "";
        public string? LocationName { get; set; }
        public string? LocationZip { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual Fruit Fruit { get; set; } = null!;

        public virtual ICollection<ReviewInteraction> ReviewInteractions
        {
            get;
            set;
        } = new List<ReviewInteraction>();
    }

    public enum ImageStatus
    {
        None,
        Pending,
        Approved,
        Rejected
    }
}