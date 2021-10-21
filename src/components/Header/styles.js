import styled from "styled-components";


export const StyledHeader = styled.header`
    background-color: #00020a;
    width: 100%;
    height: 8vh;
    z-index: 2;
    display: flex;
    align-items: center;
    color: var(--shape);
    justify-content: center;

    .false{
        transition: all 0.5s;
        filter: opacity(0.3);
        box-shadow: none;
        }
    .lingua{
        position: absolute;
        display: flex;
        right: 1rem;
        top: 1rem;
    }
    

    img{
        
        right: 0;
        margin: 0.2rem;
        width: 2rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: transform 1s;
        box-shadow: 0rem 0rem 0.1rem 0.1rem var(--cyan);

        &:hover{
            filter: brightness(1.2);
            transform: skew(20deg, -20deg);
        }

        
        
    }

    

    nav{

        height: 8vh;
        position: relative;
        align-items: center;


        a{
            cursor: pointer;
            padding: 0 2rem;
            text-decoration: none;
            font-size: 1.5rem;
            color: var(--shape);
            margin: 0 auto;
            &:first-child{
                margin-left: 3rem;
            }
        }
        
    }

`

export const Hamburger = styled.div`
    position: absolute;
    z-index: 1;
    cursor: pointer;
    display: none;
    left: 1rem;
    top: 50%;
    transform: translate(0, -50%);

    .line{
        width: 30px;
        height: 3px;
        background: var(--shape);
        margin: 5px;
    }

    @media (max-width: 768px){
        display: block;
    }

`

export const NavLinks = styled.ul`

    display: flex;
    list-style: none;
    height: 100%;
    justify-content: space-around;
    align-items: center;


    @media (max-width: 768px){
        left: 0;
        position: fixed;
        background-color: #00020a;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(100px at 90% -10%);
        -webkit-clip-path: circle(100px at 5% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
    
                
            a{
                cursor: pointer;
                text-decoration: none;
                font-size: 2rem;
                color: var(--shape);
            }

        &.isOpen{
            clip-path: circle(1000px at 90% -10%);
            -webkit-clip-path: circle(1000px at 5% -10%);
            pointer-events: all
            
        }

      
    }        

`





