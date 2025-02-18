using MedidoresAPI.Entidades;

namespace MedidoresAPI
{
    public class RepositorioEnMemoria : IRepositorioEnMemoria
    {
        private List<MedidoresEtty> _medidores;

        public RepositorioEnMemoria()
        {
            _medidores = new List<MedidoresEtty>
            {
                new MedidoresEtty("44444"),
                new MedidoresEtty("222"),
                new MedidoresEtty("4444"),
                new MedidoresEtty("8888")
            };
        }

        public List<MedidoresEtty> ObtenerMedidoresAll()
        {
            return _medidores;
        }
    }
}
