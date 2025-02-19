using System.ComponentModel.DataAnnotations;

namespace MedidoresAPI.DTO
{
    public class MedidoresCreateDTO
    {

        [Key]
        [Required(ErrorMessage = "Debe ingresar el campo Número de medidor")]
        public string numeroMedidor { get; set; }

        [Required(ErrorMessage = ("Debe ingresar el campo modelo"))]
        public string modelo { get; set; }

        [Required(ErrorMessage = "Debe ingresar el campo SGC")]
        public string SGC { get; set; }

        [Required(ErrorMessage = "Debe ingresar el campo Asignado a cliente")]
        public int AsignadoACliente { get; set; }
    }
}
