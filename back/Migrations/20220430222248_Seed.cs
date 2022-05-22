using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Versioning.Migrations
{
    public partial class Seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("IF NOT EXISTS (SELECT Id FROM Status WHERE Name = 'Administrator') BEGIN INSERT INTO Status (Name) VALUES ('Administrator') END");
            migrationBuilder.Sql("IF NOT EXISTS (SELECT Id FROM Status WHERE Name = 'User') BEGIN INSERT INTO Status (Name) VALUES ('User') END");
            migrationBuilder.Sql("INSERT INTO Users (Name, Email, StatusId) VALUES ('TestUser', 'test.user@gmail.com', (SELECT Id FROM Status WHERE Name = 'User'))");
            migrationBuilder.Sql("INSERT INTO Users (Name, Email, StatusId) VALUES ('TestAdmin', 'test.admin@gmail.com', (SELECT Id FROM Status WHERE Name = 'Administrator'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Users WHERE Name IN ('TestUser', 'TestAdmin')");
        }
    }
}
