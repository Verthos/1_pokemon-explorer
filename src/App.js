
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import {GlobalStyle} from "./styles/global"
import { SearchProvider } from "./hooks/useSearch";


export function App() {
  

  return (
    <SearchProvider>
      <Header/>
      <HomePage/>
      <Footer/>
      

      <GlobalStyle/> 
    </SearchProvider>
  );
}