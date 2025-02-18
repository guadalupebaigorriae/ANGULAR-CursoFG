using MedidoresAPI.Entidades;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;

namespace MedidoresAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedidoresController: ControllerBase
    {
        private readonly IRepositorioEnMemoria repositorio;

        public MedidoresController(IRepositorioEnMemoria repositorio)
        {
            this.repositorio = repositorio;
        }

        [HttpGet]
        public List<MedidoresEtty> Get()
        {
            var repositorio = new RepositorioEnMemoria();
            var medidores = repositorio.ObtenerMedidoresAll();
            return medidores;
        }

        [HttpPost]
        public IActionResult Post(MedidoresEtty medidor)
        {
            // Lógica para crear un nuevo medidor
            repositorio.AgregarMedidor(medidor);
            return CreatedAtAction("Get", new { id = medidor.numeroMedidor }, medidor);
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
