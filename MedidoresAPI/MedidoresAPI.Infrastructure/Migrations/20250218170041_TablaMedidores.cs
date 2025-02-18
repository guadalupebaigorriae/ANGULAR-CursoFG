using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedidoresAPI.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class TablaMedidores : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Medidores",
                columns: table => new
                {
                    numeroMedidor = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    modelo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SGC = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AsignadoACliente = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medidores", x => x.numeroMedidor);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Medidores");
        }
    }
}
