using MedidoresAPI.Entidades;

namespace MedidoresAPI.Infrastructure
{
    public class RepositorioEnMemoria : IRepositorioEnMemoria
    {
        private List<MedidoresEtty> _medidores;

        public RepositorioEnMemoria()
        {
            _medidores = new List<MedidoresEtty>
            {
                new MedidoresEtty("44444", "INH", "8989", 0),
                new MedidoresEtty("222", "MONO", "8989", 1),
                new MedidoresEtty("4444", "INH", "555", 0),
                new MedidoresEtty("8888", "INH", "8989", 1)
            };
        }

        public List<MedidoresEtty> ObtenerMedidoresAll()
        {
            return _medidores;
        }

        public void AgregarMedidor(MedidoresEtty medidor)
        {
            
            // Agregar el medidor a la lista
            _medidores.Add(medidor);

        }

        public void UpdateMedidores(List<MedidoresEtty> nuevosMedidores)
        {
        }
    }
}
