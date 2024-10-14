using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FruitFinderData.Migrations
{
    /// <inheritdoc />
    public partial class useroid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Oid",
                table: "Users",
                type: "varchar(255)",
                maxLength: 255,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Oid",
                table: "Users");
        }
    }
}
