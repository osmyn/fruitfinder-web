namespace FruitFinderDomain
{
    public class Fruit : DomainBase
    {
        public string PLU { get; set; }
        public Category Category { get; set; }
        public string Commodity { get; set; }
        public string Variety { get; set; }
        public Size Size { get; set; }
        public string? BotanicalName { get; set; }
    }

    public enum Category
    {
        Fruits,
        DriedFruits,
        Herbs,
        Nuts,
        Vegetables
    }

    public enum Size
    {
        AllSizes,
        Mini,
        Small,
        Medium,
        Large,
        ExtraLarge,
        Jumbo,
        Bulk,
        Pint,
        Quart,
        ThreeToSevenPounds
    }
}