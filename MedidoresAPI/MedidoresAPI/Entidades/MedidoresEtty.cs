using System.ComponentModel.DataAnnotations;

namespace MedidoresAPI.Entidades
{
    public class MedidoresEtty
    {
        public MedidoresEtty(string numeroMedidor, string modelo, string sGC, int asignadoACliente)
        {
            this.numeroMedidor = numeroMedidor;
            this.modelo = modelo;
            SGC = sGC;
            AsignadoACliente = asignadoACliente;
        }

        [Required(ErrorMessage = "Debe ingresar el campo Número de medidor")]
        public string numeroMedidor { get; set; }

        [Required (ErrorMessage =("Debe ingresar el campo modelo"))]
        public string modelo { get; set; }

        [Required(ErrorMessage = "Debe ingresar el campo SGC")]
        public string SGC { get; set; }

        [Required(ErrorMessage = "Debe ingresar el campo Asignado a cliente")]
        public int AsignadoACliente { get; set; }
    }
}
