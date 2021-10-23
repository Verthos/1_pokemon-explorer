import { createContext, useContext, useState, useEffect } from "react";
import {api} from "../services/api"


const SearchContext = createContext({});

export function SearchProvider({children}) {

    const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/"
    const [ pokemonName, setPokemonName ] = useState("")
        
    const [ pokemon, setPokemon] = useState({
        name: "", 
        species: "", 
        species_url: "",
        images: "", 
        stats: {
            hp: "", 
            atk: "", 
            def: "", 
            special_atk: "", 
            special_def: "", 
            speed: ""
        }
    })
    
    const [ completePokemonInformation, setCompletePokemonInformation] = useState({
        name: "", 
        species: "", 
        species_url: "",
        images: "", 
        stats: {
            hp: "", 
            atk: "", 
            def: "", 
            special_atk: "", 
            special_def: "", 
            speed: ""
        },
        base_happiness: "",
        evolution_chain_url: "",
        flavor_text: "",
        habitat: "",
        other_names: "",
        id: ""

    })
  

    const search = async () => {

        api.get( pokeApiUrl + pokemonName)
        .then((response) => {
        setPokemon({ name: response.data.name, 
            species: response.data.species.name,
            species_url: response.data.species.url,
            images: response.data.sprites.front_default, 
            stats: {
                hp: response.data.stats[0].base_stat, 
                atk: response.data.stats[1].base_stat, 
                def: response.data.stats[2].base_stat, 
                speed: response.data.stats[5].base_stat,
                special_atk: response.data.stats[3].base_stat, 
                special_def: response.data.stats[4].base_stat
                }
            })
        })
        .catch(err => {console.error('WE HAVE A PROBLEM!', err)})

        
    }

    useEffect(() => {
        api.get(pokemon.species_url)
        .then((response) => {
        setCompletePokemonInformation({
            ...pokemon,
            base_happiness: response.data.base_happiness,
            evolution_chain_url: response.data.evolution_chain,
            flavor_text: response.data.flavor_text_entries,
            habitat: response.data.habitat,
            other_names: response.data.names,
            id: response.data.id
            })})
            .catch(err => {console.error('WE HAVE A PROBLEM!', err)})
    },[pokemon])



    return(
        
        <SearchContext.Provider value={{completePokemonInformation, setPokemonName, search}}>
            {children}
        </SearchContext.Provider>
    )


}

export function useSearch() {
    const context = useContext(SearchContext)
    return context
}