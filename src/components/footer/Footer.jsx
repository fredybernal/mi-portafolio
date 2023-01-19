import "./styles.css"
import logoFooter from "./img/1.png"


export default function Footer() {

    return (
        <>
            <footer>
                
                <p className="developed" >Developed by</p>
                <img className="logo_footer" src={logoFooter} alt="logo footer" />
            </footer>
        </>
    );
}