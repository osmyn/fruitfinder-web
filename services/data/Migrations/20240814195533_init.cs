using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FruitFinderData.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompoundId = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ProviderType = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    ProviderId = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    ProviderAccountId = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false),
                    RefreshToken = table.Column<string>(type: "text", maxLength: 255, nullable: true),
                    AccessToken = table.Column<string>(type: "text", maxLength: 255, nullable: true),
                    AccessTokenExpires = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
