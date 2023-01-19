import "./styles.css"
import imagenUno from "./img/1.jpeg"
import imagenDos from "./img/2.jpeg"
import imagenTres from "./img/PORTADA.jpg"
import imagenCuatro from "./img/3.jpeg"

export default function Main() {

    return (
        <>
            <main>
                <div>
                    <h1 className="fondo">Portafolio</h1>
                    <h2>Mi portafolio</h2>
                </div>
                <div className="contenedor">
                    <img src={imagenUno} alt="primera imagen " />
                    <h1 className="texto-encima">Proyectos realizados por mi</h1>
                    <p className="centrado">Proyecto cliente real </p>
                    <h3 className="url">Url</h3>
                    <p className="segundo-proyecto">Proyecto marca personal </p>
                    <h3 className="segundo">Url</h3>
                    <p className="tercer-proyecto">Proyecto final </p>
                    <h3 className="tercero">Url</h3>
                </div>
                <div>
                    <h1 className="fondo_dos">Resumen</h1>
                    <h2 className="encima">Mi resumen</h2>
                </div>
                <div className="segunda_imagen">
                    <img src={imagenDos} alt="segunda imagen " />
                    <h1 className="bachillerato">Bachillerato :</h1>
                    <h1 className="cursos" >Cursos :</h1>
                </div>
                <div>
                    <h1 className="fondo_tres">Skills</h1>
                    <h2 className="encima_tres">Mis skills</h2>
                </div>
                <div className="tercera_imagen">
                    <img src={imagenTres} alt="cuarta imagen " />
                    <h1 className="HTML">HTML :</h1>
                    <h1 className="CSS" >CSS :</h1>
                    <h1 className="JAVASCRIPT" >JAVASCRIPT :</h1>
                    <h1 className="REACT" >REACT :</h1>
                </div>
                <div>
                    <h1 className="fondo_tres">Contactos</h1>
                    <h2 className="encima_tres">contactos</h2>
                </div>
                <div className="cuarta_imagen">
                    <img src={imagenCuatro} alt="tercera imagen " />
                    <h1 className="email">Email :</h1>
                    <h2 className="correo" >jhonbernal542@gmail.com</h2>
                    <h1 className="telefono" >Telefono:</h1>
                    <h2 className="numero" >3213435426</h2>
                    <h1 className="localizacion" >Localizacion :</h1>
                    <h2 className="bogota" >Bogota D.C-Colombia</h2>
                </div>
                <div className="separador_dos"></div>
            </main>
        </>
    );
}