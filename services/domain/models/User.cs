namespace FruitFinderDomain
{
    public class User : DomainBase
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string? Oid { get; set; }
        public string? ImageUrl { get; set; }
        public string Zipcode { get; set; }

        public virtual ICollection<Review> Reviews { get; set; } =
            new List<Review>();

        public virtual ICollection<ReviewInteraction> ReviewInteractions
        {
            get;
            set;
        } = new List<ReviewInteraction>();
    }
}