import { StyledHeader } from "./styles"

export function Header() {
    //Componente com nav utilizando react-scroll para animação e navegação entre os componentes da pagina. 
    /* 
        Menu Hamburger - estilização pronta
        <Hamburger onClick={() => setMenuIsOpen(!meuIsOpen)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </Hamburger>
    */
    

    return(

        <StyledHeader>
            <nav className="menu">
            </nav>
            <h1>Pokemon Explorer!</h1>
        </StyledHeader>
    )
}