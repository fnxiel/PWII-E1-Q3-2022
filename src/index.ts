interface IAplicacion{
    titulo: string
    descripcion: string
    imagenes: IImagen[]
    descargas: number
    puntaje: number
    comentarios: IComentario[]
    escribirComentario(comentario: IComentario): void
    sumarEstrella(): number
    obtenerEstrellas(): number
    obtenerFotografias(): IImagen[]
    obtenerFotografia(nombre: string): IImagen | undefined
}

interface IImagen{
    src: string
    texto: string
}

interface IComentario{
    usuario: string
    comentario: string
    puntaje: number
}

class Aplicacion implements IAplicacion{
    titulo: string
    descripcion: string
    imagenes: IImagen[] =[]
    descargas: number = 0
    puntaje: number = 0
    comentarios: IComentario[] = []

    constructor(titulo: string,
        descripcion: string,
        imagen: IImagen){
        this.titulo = titulo
        this.descripcion = descripcion
        this.imagenes.push(imagen)
    }

    escribirComentario(comentario: IComentario): void {
        this.comentarios.push(comentario)
    }
    sumarEstrella(): number {
        this.puntaje = this.puntaje + 1
        return this.puntaje
    }
    obtenerEstrellas(): number {
        return this.puntaje
    }
    obtenerFotografias(): IImagen[] {
        return this.imagenes
    }
    obtenerFotografia(nombre: string): IImagen | undefined {
        return this.imagenes.find(imagen => imagen.texto === nombre)
    }

}

let portada: IImagen = {
    src: "https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk=w480-h960-rw", 
    texto: "LogoChrome"
}

let app : IAplicacion = new Aplicacion(
    "Google Chrome: rápido y seguro", 
    "Google Chrome es un navegador rápido, sencillo y seguro. La versión específica para Android te proporciona noticias personalizadas, vínculos rápidos a tus sitios favoritos y descargas; también integra los servicios de Búsqueda de Google y Google Traductor.",
    portada
)

let comentarioNuevo: IComentario = {
    comentario:"Lorem impsum",
    usuario:"Usuario",
    puntaje: 0
}

app.escribirComentario(comentarioNuevo)
app.escribirComentario(comentarioNuevo)

console.log("Cantidad de estrellas", app.obtenerEstrellas())

console.log("Cantidad estrellas despues de suma", app.sumarEstrella())

console.log("Fotografias de la aplicacion", app.obtenerFotografias())

console.log("Logo de la aplicacion", app.obtenerFotografia("LogoChrome"))

console.log(app)