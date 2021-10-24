import { useSearch } from "../../hooks/useSearch"
import { StyledHome, StyledButton, StyledCard, StyledHeader, StyledCardSection } from "./styles"
import {ToastContainer} from "react-toastify";
import pikachu from "../../assets/pikachu.png";


export function HomePage() {
    

    const pokedex = useSearch();
    

    return(     

        <StyledHome>      
            <StyledCard>
                <StyledHeader> <h1>Pokemon,</h1><span>Explorer!</span></StyledHeader>
                <div className="searchInput">
                    <input placeholder="Pesquisar" onChange={(event) => pokedex.setPokemonName(event.target.value.toLowerCase())}></input>
                    <StyledButton onClick={pokedex.search}>Gotcha!</StyledButton>   
                </div>  

                <img className={pokedex.isSearching ? "pikachu" : "hiddenPikachu"} src={pikachu} alt="pikachu" />             
                <div className={"pokemonInformations"}>
                    

                <h1>{pokedex.completePokemonInformation.name}</h1>
                {window.innerWidth > 500 && pokedex.isSearching
                    ?   pokedex.completePokemonInformation.name !== "" ?
                            <div className="imagens">
                                <img src={pokedex.completePokemonInformation.allImages.front} alt="pokemon_image" />
                                <img src={pokedex.completePokemonInformation.allImages.back} alt="pokemon_image" />
                            </div> : <h1>Vamos procurar?</h1>
                            
                
                    : pokedex.completePokemonInformation.name !== "" ? <img src={pokedex.completePokemonInformation.allImages.front} alt="pokemon_image" /> : <h1>Procure por um Pokemon!</h1>
                }



                    <div className="types">
                    
                        {pokedex.completePokemonInformation.types1 !== "" ?
                        <StyledCardSection>
                            <h3 className={pokedex.completePokemonInformation.types}>{pokedex.completePokemonInformation.types}</h3>
                        </StyledCardSection> : ""}

                        
                        {pokedex.completePokemonInformation.types2 !== "" ? 
                            <StyledCardSection>
                                <h3 className={pokedex.completePokemonInformation.types2}>{pokedex.completePokemonInformation.types2}</h3> 
                            </StyledCardSection> : ""}
                        

                    </div>

                    <div className={pokedex.isSearching ? "lore" : "remove"}>
                        <p><b>Lore: </b>{pokedex.completePokemonInformation.flavor_text}</p>
                    </div>
                
                    <div className={pokedex.isSearching ? "stats" : "remove"}>
                        <ul>
                            <h3>Atributos</h3>
                            <li>HP: {pokedex.completePokemonInformation.stats.hp}</li>
                            <li>Ataque: {pokedex.completePokemonInformation.stats.atk}</li>
                            <li>Defesa: {pokedex.completePokemonInformation.stats.def}</li>
                            <li>Velocidade: {pokedex.completePokemonInformation.stats.speed}</li>
                            <li>A. especial: {pokedex.completePokemonInformation.stats.special_atk}</li>
                            <li>D. especial: {pokedex.completePokemonInformation.stats.special_def}</li>
                        </ul>
                    </div>

                    <div className={pokedex.isSearching ? "addInfo" : "remove"}>
                    <ul>
                            <h3>Informações</h3>
                            <li>Poke ID: {pokedex.completePokemonInformation.id}</li>
                            <li>Tipo: </li>
                            <li>Habitat: {pokedex.completePokemonInformation.habitat}</li>
                            <li>Peso: {pokedex.completePokemonInformation.weight}</li>
                            <li>Felicidade: {pokedex.completePokemonInformation.base_happiness}</li>
                        </ul>
                    </div>        
                </div>
            
            
                  <ToastContainer/>
            </StyledCard>
        </StyledHome>
    )
}