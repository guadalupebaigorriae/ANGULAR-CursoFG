using AutoMapper;
using MedidoresAPI.DTO;
using MedidoresAPI.Entidades;
using MedidoresAPI.Infrastructure;

namespace MedidoresAPI.Utilities
{
    public class AutoMapperProfiles : Profile
    {
        private readonly ApplicationDbContext context;

        public AutoMapperProfiles() 
        {
            ConfigurarMapeoMedidores();
        }

        public void ConfigurarMapeoMedidores()
        {
            CreateMap<MedidoresCreateDTO, MedidoresEtty>();
        }
    }
}
