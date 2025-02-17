namespace MedidoresAPI.Entidades
{
    public class MedidoresEtty
    {
        public MedidoresEtty(string numeroMedidor)
        {
            this.numeroMedidor = numeroMedidor;
        }

        public string numeroMedidor { get; set; }
    }
}
