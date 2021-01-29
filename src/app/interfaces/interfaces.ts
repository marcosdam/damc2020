// Interfaz Componente
export interface Componente{
    icon: string;
    name: string;
    redirectTo: string;
}
// Interfaz Elemento
export interface Elemento{
    autor: string;
    contenido: string;
    imagen: string;
    titulo: string;
}

// Album
export interface Album {
    userId: number;
    id: number;
    title: string
}
