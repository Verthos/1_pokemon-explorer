import { createContext, useContext, useState, useEffect } from "react";
import {api} from "../services/api"
import 'react-toastify/dist/ReactToastify.min.css'; 


const SearchContext = createContext({});

export function SearchProvider({children}) {

    const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/"
    const [isSearching, setIsSearching] = useState(false)
    const [ pokemonName, setPokemonName ] = useState("");        
    
    const [ pokemon, setPokemon] = useState({
        name: "", 
        species: "", 
        species_url: "",
        images: "", 
        weight:"",
        types: "",
        types2: "",
        stats: {
            hp: "", 
            atk: "", 
            def: "", 
            special_atk: "", 
            special_def: "", 
            speed: ""
        },
        
    })
    const [ completePokemonInformation, setCompletePokemonInformation] = useState({
        name: "", 
        species: "", 
        species_url: "",
        images: "",
        weight: "",
        types: "",
        types2: "",
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
        id: "",
        

    })
  

    const search = async () => {

        api.get( pokeApiUrl + pokemonName)
        .then((response) => { //console.log(response.data);
            setPokemon({ name: response.data.name[0].toUpperCase() + response.data.name.substring(1), 
                species: response.data.species.name,
                species_url: response.data.species.url,
                allImages: {
                    front: response.data.sprites.front_default,
                    back: response.data.sprites.back_default,
                    front_female: response.data.sprites.front_female,
                    back_female: response.data.sprites.back_female,
                },
                images: response.data.sprites.front_default, 
                weight: response.data.weight,
                types: response.data.types[0].type.name, // ----TO DO Refatorar para pegar todos os tipos disponíveis
                types2: response.data.types.length > 1 ? response.data.types[1].type.name : "",
                stats: {
                    hp: response.data.stats[0].base_stat, 
                    atk: response.data.stats[1].base_stat, 
                    def: response.data.stats[2].base_stat, 
                    speed: response.data.stats[5].base_stat,
                    special_atk: response.data.stats[3].base_stat, 
                    special_def: response.data.stats[4].base_stat
                    }
            })
        }).then(setIsSearching(true))
        

        
    };

    useEffect(() => {
        api.get(pokemon.species_url)
        .then((response) => {  //----- TO DO FLAVOR TEXT FIND
        setCompletePokemonInformation({
            ...pokemon,
            base_happiness: response.data.base_happiness,
            evolution_chain_url: response.data.evolution_chain,
            flavor_text: response.data.flavor_text_entries[0].flavor_text,
            habitat: response.data.habitat.name,
            other_names: response.data.names,
            id: response.data.id
            })})
            .catch(err => {console.log('WE HAVE A PROBLEM! Pokemon not find' , err)})

            
    },[pokemon]);


    return(
        
        <SearchContext.Provider value={{completePokemonInformation, setPokemonName, search, isSearching}}>
            {children}
        </SearchContext.Provider>
    )


}

export function useSearch() {
    const context = useContext(SearchContext)
    return context
}

//response.data.flavor_text_entries.find(response.data.flavor_text_entries.language.name === "en")