export interface MedidorDTO{
    numeroMedidor: string;
    modelo: string
    sgc: string;
    asignadoACliente: number;
}

export interface MedidorCreacionDTO{
    numeroMedidor: string | null; 
    modelo: string | null;
    sgc: string | null;
    asignadoACliente: number | null;
}