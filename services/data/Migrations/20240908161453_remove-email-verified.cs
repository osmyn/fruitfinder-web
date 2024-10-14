﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FruitFinderData.Migrations
{
    /// <inheritdoc />
    public partial class removeemailverified : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmailVerified",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "EmailVerified",
                table: "Users",
                type: "datetime2",
                nullable: true);
        }
    }
}
