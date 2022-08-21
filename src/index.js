class Aplicacion{
    titulo
    descripcion
    imagenes = []
    descargas = 0
    puntaje = 0
    comentarios = []

    constructor(titulo, descripcion, imagen){
        this.titulo = titulo
        this.descripcion = descripcion
        this.imagenes.push(imagen)
    }

    escribirComentario(comentario){
        this.comentarios.push(comentario)
    }
    sumarEstrella(){
        this.puntaje = this.puntaje + 1
        return this.puntaje
    }
    obtenerEstrellas(){
        return this.puntaje
    }
    obtenerFotografias() {
        return this.imagenes
    }
    obtenerFotografia(nombre){
        return this.imagenes.find(imagen => imagen.texto === nombre)
    }

}

let portada = {
    src: "https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk=w480-h960-rw", 
    texto: "LogoChrome"
}

let app = new Aplicacion(
    "Google Chrome: rápido y seguro", 
    "Google Chrome es un navegador rápido, sencillo y seguro. La versión específica para Android te proporciona noticias personalizadas, vínculos rápidos a tus sitios favoritos y descargas; también integra los servicios de Búsqueda de Google y Google Traductor.",
    portada
)

let comentarioNuevo = {
    comentario:"Lorem impsum",
    usuario:"Francisco",
    puntaje: 0
}

app.escribirComentario(comentarioNuevo)
app.escribirComentario(comentarioNuevo)

console.log("Cantidad de estrellas", app.obtenerEstrellas())

console.log("Cantidad estrellas despues de suma", app.sumarEstrella())

console.log("Fotografias de la aplicacion", app.obtenerFotografias())

console.log("Logo de la aplicacion", app.obtenerFotografia("LogoChrome"))

console.log(app)