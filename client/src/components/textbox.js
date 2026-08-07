import { useState } from "react";
import "./textbox.css"
import axios from "axios";

function TextBox({logedin}){
    
    const [textValue, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
      };
    const handleSubmit = (event) =>{
        try {
            let res = axios.post() //criar API para post
        } catch (error) {
            
        }
    };

    if (!logedin) {
        return (
            <p>Entre em sua conta para digitar.</p>
        )
    };

    return(
        <form onSubmit={handleSubmit}>
        <textarea className="textbox" placeholder="Digite aqui" cols={30} rows={5} value={textValue} onChange={handleChange}>
        </textarea>
        <p></p>
        <button type="submit"> Enviar</button>
        </form>
    );
}

export default TextBox;