using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FruitFinderData.Migrations
{
    /// <inheritdoc />
    public partial class fruits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fruits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PLU = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Commodity = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    Variety = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    Size = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BotanicalName = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fruits", x => x.Id);
                });

            
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Fruits");
        }
    }
}
