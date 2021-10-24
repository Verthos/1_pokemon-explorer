
import React from "react";
import { HomePage } from "./components/HomePage";
import {GlobalStyle} from "./styles/global"
import { SearchProvider } from "./hooks/useSearch";


export function App() {
  

  return (
    <SearchProvider>
      <HomePage/>
     
      <GlobalStyle/> 
    </SearchProvider>
  );
}