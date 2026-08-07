import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Vagas from "./pages/vagas";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< Vagas />}/>
           </Routes>
       </BrowserRouter>
   )
}
export default App;
