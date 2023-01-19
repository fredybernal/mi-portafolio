import "./styles.css"
import Logo from "./img/2.png"

export default function NavBar() {

    return (
        <>
        <nav>
            <ul>
                <img className="logo" src={Logo} alt="logo" />
                <li>Resumen</li>
                <li>Portafolio</li>
                <li>Skills</li>
                <li>Contactos</li>
            </ul>
        </nav>
        </>
    );
}