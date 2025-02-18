﻿using MedidoresAPI.Entidades;
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
    }
}
