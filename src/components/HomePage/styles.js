import styled from "styled-components";

export const StyledHome = styled.div`

    
    background: linear-gradient(to right top, #141e30  , #243b55);
    display: flex;
    padding: 0.5rem;
    height: 100vh;
    align-items: center;
    flex-direction: column;

    @media (min-width: 500px){
        padding: 5rem;
        display: flex;
    }
    

    input{
    width: 12rem;
    height: 3rem;
    border: none;
    padding: 1rem;
    }

    .imagens{
        right: 32%;
        bottom: 50%;
        position: absolute;
        display: flex;
        flex-direction: row;
    }

    .pikachu{
        position: absolute;
        top: 10rem;
        max-width: 15rem;
        left: 1%;
        transform: translateX(-40%) rotate(60deg);
        transition: all 4s;
    }
    .hiddenPikachu{
        
        position: absolute;
        transition: all 2s;
        top: 10rem;
        max-width: 15rem;
        left: -15rem;
        
    }
    .remove{
        transition: opacity 1s ease-out;
        opacity: 0;
        height: 0;
        overflow: hidden;

    }
    .types{
        align-items: center;
        justify-content: center;
        position: relative;
        display: flex;
        width: 90%;


        @media (min-width: 500px){
        
            flex-direction: column;

        }
    }
    .card{

    }
    .searchInput{
        margin: 1rem 0;
    }
    .bug{
        background: #A8B820;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .dark{
        background: #705849;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .dragon{
        background: #7038F8;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .electric{
        background: #F8D030;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .fairy{
        background: #F0B6BC;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .fighting{
        background: #C03028;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .fire{
        background: #F08030;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .flying{
        background: #A890F0;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .ghost{
        background: #705898;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .grass{
        background: #78C850;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .ground{
        background: #E0C068;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .ice{
        background: #98D8D8;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .normal{
        background: #A8A878;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .poison{
        background: #807870;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .psychic{
        background: #F85888;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .rock{
        background: #B8A038;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .steel{
        background: #B8B8D0;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
    }
    .water{
        background: #6890F0;
        color: var(--shape);
        height: 2rem;
        border-radius: 0.5rem;
        
    }
`

export const StyledButton = styled.button`
    cursor: pointer;
    width: 5rem;
    height: 3rem;
    text-align: center;
    border: none;
    border-radius: 0.2rem;
    background: var(--blue);
    color: var(--shape);
    font-weight: bold;
`

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    height: 95%;
    width: 90%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));;
    border-radius: 1rem;
    box-shadow: 2px 2px 10px #000000;

    @media (min-width: 500px){
        height: 80vh;
        display: flex;
        

    }

    
    

    

    .pokemonInformations{

        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-bottom: 2rem;

            @media (min-width: 500px){
                height: 80vh;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                padding-bottom: 0;
                
                
            }
        
        img{

            width: 15rem;
            height: 15rem ;
            top: 0;

            @media (min-width: 500px){
                
                height: 15rem;
                width: 15rem;
                bottom: 0;
            }
            
        }

        

        .stats{
            position: relative;
            font-size: 1.1rem;
            width: 45%;
            border-radius: 1rem;
            padding: 0.5rem;
            background: linear-gradient(to top left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
            box-shadow: 2px 2px 2px var(--soft-black);
            bottom: -1rem;
            
            @media (min-width: 500px){
                
                height: 40%;
                width: 25%;
                bottom: 0;
            }
            
        }

        .addInfo{
            position: relative;
            font-size: 1.1rem;
            width: 45%;
            border-radius: 1rem;
            padding: 0.5rem;
            background: linear-gradient(to top left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
            box-shadow: 2px 2px 2px var(--soft-black);
            bottom: -1rem;


            @media (min-width: 500px){
                
                height: 40%;
                width: 25%;
                bottom: 0;
                right: -2rem;
            }


        }

        .lore{
            position: relative;
            font-size: 1.3rem;
            width: 90%;
            height: 8rem;
            border-radius: 1rem;
            padding: 0.5rem;
            background: linear-gradient(to top left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
            box-shadow: 2px 2px 2px var(--soft-black);
            @media (min-width: 500px){
                
                height: 40%;
                width: 25%;
                bottom: 0;
                left: -2rem;
            }


            
            p{
                position: relative;
            }
        }
        li{
            list-style: none;
        }
    }
    h1{
        font-size: 3rem;
    }

    
`


export const StyledHeader = styled.header`
    font-family: 'Chango', cursive;
    font-size: 3rem;
    font-weight: bold;
    height: 10rem;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to top left, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2));
    position: relative;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    h1{
        color: var(--soft-black);
    }
    span{
        color: var(--soft-black);
        
    }

    @media (min-width: 500px){
        width: 100%;

    }


    

`



export const StyledCardSection = styled.section`

    width: 8rem;
    color: var(--shape);
    text-align: center;
    height: 2rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 2px var(--soft-black);
    position: relative;
    left: -38%;



`
