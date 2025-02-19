using MedidoresAPI.Entidades;
using MedidoresAPI.Infrastructure;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;
using MedidoresAPI.Infrastructure;
using Microsoft.EntityFrameworkCore;
using MedidoresAPI.DTO;
using AutoMapper;

namespace MedidoresAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedidoresController: ControllerBase
    {
        private readonly IRepositorioEnMemoria repositorio;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public MedidoresController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
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
        public async Task<IActionResult> Post([FromBody]MedidoresCreateDTO medidor)
        {
            var medidorMap = mapper.Map<MedidoresEtty>(medidor);
            if (medidor == null)
            {
                return BadRequest("El objeto Medidor no puede ser nulo.");
            }

            try
            {
                context.Add(medidorMap);
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
        public async Task<IActionResult> PutMedidores([FromBody] MedidoresEtty nuevoMedidor)
        {
            MedidoresEtty medidor = await GetById(nuevoMedidor.numeroMedidor);
            // Validar los datos entrantes
            if (medidor == null)
            {
                return BadRequest("La lista de medidores está vacía");
            }
            
            medidor.SGC = nuevoMedidor.SGC;
            medidor.AsignadoACliente = nuevoMedidor.AsignadoACliente;
            medidor.modelo = nuevoMedidor.modelo;

            context.Medidores.Update(medidor);
            await context.SaveChangesAsync();
            // Actualizar la lista existente
            //repositorio.UpdateMedidores(nuevosMedidores);

            return Ok();
        }
    }
}
