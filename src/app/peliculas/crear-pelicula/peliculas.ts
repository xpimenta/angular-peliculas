export interface PeliculaDTO{
    id: number;
    titulo: string;
    fechaLanzamineto: Date;
    trailer: string;
    poster?: string;
}

export interface PeliculaCreacionDTO{
    titulo: string;
    fechaLanzamineto: Date;
    trailer: string;
    poster?: File;
}