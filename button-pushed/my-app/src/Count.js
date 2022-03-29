import "./Count.css";
import React,{useState} from 'react';

function Count(props) {

  let [sayi,sayiArttir]=useState(props.sayi);

  const clickHandler= ()=>{
    sayiArttir(sayi+1);
    console.log(sayi);

  }
    
  return (
    <div className="text">
      <h2>{sayi}</h2>
      <div>
          <div>
               <button className="button" onClick={clickHandler}>Arttır</button>
          </div>
         
      </div>
      
    </div>
  );
}
export default Count;
