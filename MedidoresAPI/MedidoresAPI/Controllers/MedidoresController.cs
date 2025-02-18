using MedidoresAPI.Entidades;
using MedidoresAPI.Infrastructure;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;
using MedidoresAPI.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace MedidoresAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedidoresController: ControllerBase
    {
        private readonly IRepositorioEnMemoria repositorio;
        private readonly ApplicationDbContext context;

        public MedidoresController(ApplicationDbContext context)
        {
            this.context = context;
            //this.repositorio = repositorio;
        }

        [HttpGet]
        public async Task<List<MedidoresEtty>> Get()
        {
            return await context.Medidores.ToListAsync();
            //var repositorio = new RepositorioEnMemoria();
            //var medidores = repositorio.ObtenerMedidoresAll();
            //return medidores;
        }

        [HttpGet("{id}", Name = "ObtenerMedidorPorId")]
        public async Task<MedidoresEtty> GetById(string numeroMedidor)
        {
            MedidoresEtty medidor = await context.Medidores.FindAsync(numeroMedidor);

            return medidor;
        }

        [HttpPost]
        public async Task<IActionResult> Post(MedidoresEtty medidor)
        {
            if (medidor == null)
            {
                return BadRequest("El objeto Medidor no puede ser nulo.");
            }

            try
            {
                context.Add(medidor);
                await context.SaveChangesAsync();

                return CreatedAtRoute("ObtenerMedidorPorId", new { id = medidor.numeroMedidor }, medidor);
            }
            catch (Exception ex)
            {
                // Manejar la excepción (por ejemplo, registrarla en un log)
                return StatusCode(500, $"Error al crear el medidor: {ex.Message}");
            }
            //context.Add(medidor);
            //await context.SaveChangesAsync();

            //return CreatedAtRoute("ObtenerMedidorPorId", new {id = medidor.numeroMedidor}, medidor);
            // Lógica para crear un nuevo medidor
            //repositorio.AgregarMedidor(medidor);
            //return CreatedAtAction("Get", new { id = medidor.numeroMedidor }, medidor);
        }

        [HttpPut]
        public IActionResult PutMedidores([FromBody] List<MedidoresEtty> nuevosMedidores)
        {
            // Validar los datos entrantes
            if (nuevosMedidores == null || !nuevosMedidores.Any())
            {
                return BadRequest("La lista de medidores está vacía");
            }

            // Actualizar la lista existente
            repositorio.UpdateMedidores(nuevosMedidores);

            return Ok();
        }
    }
}
