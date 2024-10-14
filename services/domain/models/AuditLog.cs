namespace FruitFinderDomain
{
    public class AuditLog : DomainBase
    {
        public string? IPAddress { get; set; }
        public string? Session { get; set; }
        public Type Type { get; set; }
        public string? Endpoint { get; set; }
        public string? Identifier { get; set; }
        public string Message { get; set; } = "";
        public string? ErrorMessage { get; set; }
        public string? ErrorStack { get; set; }
        public string? Request { get; set; }
        public string? Response { get; set; }
        public string? AdditionalInfo { get; set; }
    }

    public enum Type
    {
        Debug,
        Info,
        Warning,
        Error,
        Fatal
    }
}