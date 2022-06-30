import style from "./Card.module.css";
import React from "react";



const Card=(props)=>{
        
        
          return (
          <div>
              <div>{props.name}</div>
               <div>{props.id}</div>
               <div>{props.group}</div>
               <div>{props.assistant}</div>
          </div>
            

               
          )
        }
  

export default Card;