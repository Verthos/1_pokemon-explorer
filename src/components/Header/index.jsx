import { useState } from "react";
import { Hamburger, NavLinks, StyledHeader } from "./styles"
import { Link } from "react-scroll";

export function Header() {
    
    const [meuIsOpen, setMenuIsOpen] = useState(false)
    

    return(

        //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina.
        <StyledHeader>
            
            <nav className="menu">
                <NavLinks className={meuIsOpen? "isOpen" : "isClosed"}>
                    <li><Link onClick={() => setMenuIsOpen(!meuIsOpen)} to="home" smooth={true} duration={1000}>Home</Link></li>
                </NavLinks>
                

                <Hamburger onClick={() => setMenuIsOpen(!meuIsOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </Hamburger>
            </nav>

            <h1>Pokemon Explorer!</h1>

        </StyledHeader>
    )
}