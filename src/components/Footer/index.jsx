import { StyledFooter, SocialDiv } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


export function Footer() {


        return( 
            <StyledFooter>
    
                <h1>Footer<span>!</span></h1>
    
    
                <p></p>
    
                <SocialDiv id="contato">
                    <a target="_blank" rel="noreferrer" className ="linkedin" href="https://www.linkedin.com/in/william-kszan-79b292105/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="github" href="https://github.com/Verthos">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className ="instagram" href="https://www.instagram.com/wilkszan/">
                        <FontAwesomeIcon icon={faInstagram} size="3x"/>
                        
                    </a>
    
                </SocialDiv>
                
            </StyledFooter>
            
        )

    }