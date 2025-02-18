using MedidoresAPI.Entidades;

namespace MedidoresAPI
{
    public interface IRepositorioEnMemoria
    {
        void AgregarMedidor(MedidoresEtty medidor);
        List<MedidoresEtty> ObtenerMedidoresAll();
        void UpdateMedidores(List<MedidoresEtty> nuevosMedidores);
    }
}