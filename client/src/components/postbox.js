import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useState } from "react";

function PostBox({logedin, title, text}){
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    if (!logedin) {
         return(
            <div className="title">{title}
            <div className="corpo"> 
                <p>{text}</p>
                </div>
            <footer> 

                <span>Entre em sua conta para interagir.</span>

                <p>  
                <BiLike className="btnLike"/> 
                {countLike} 
                <BiDislike className="btnLike"/>
                {countDislike} 
                </p>
            </footer>
            </div>
        );
    }

    return(
        <div className="title">{title}
         <div className="corpo"> 
            <p>{text}</p>
            </div>
         <footer> 
            <p>  
            <BiLike className="btnLike" onClick={() => setCountLike(countLike + 1)}/> 
            {countLike} 
            <BiDislike className="btnLike"  onClick={() => setCountDislike(countDislike + 1)}/>
            {countDislike} 
            </p>
         </footer>
        </div>
    );
}
export default PostBox;