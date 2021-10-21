import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import { StyledHome } from "./components/HomePage/styles";

import {GlobalStyle} from "./styles/global"


export function App() {
  return (
    <>
      <Header/>
      <StyledHome/>
      <Footer/>
      

      <GlobalStyle/> 
    </>
  );
}