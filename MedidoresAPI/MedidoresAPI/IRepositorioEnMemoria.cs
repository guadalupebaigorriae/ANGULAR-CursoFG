using MedidoresAPI.Entidades;

namespace MedidoresAPI
{
    public interface IRepositorioEnMemoria
    {
        List<MedidoresEtty> ObtenerMedidoresAll();
    }
}