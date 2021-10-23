import styled from "styled-components"

export const StyledHome = styled.div`
    display: flex;
    padding: 1rem;
    height: 100vh;
    align-items: center;
    flex-direction: column;

    

    input{
    width: 12rem;
    height: 2rem;
    border: none;
    padding: 1rem;
    }

    .searchInput{
        margin: 3rem 0;
    }

`

export const StyledButton = styled.button`
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    text-align: center;
    border: none;
    border-radius: 0.2rem;
    background: var(--yellow-100);
`

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;

    height: 20rem;
    width: 100%;
    padding: 1rem;
    align-items: center;
    
    h1{
        font-size: 3rem;
    }

    img{
        width: 20rem;
        
    }

    .statusClass{
        display: flex;
        padding: 1rem;
    }


`

