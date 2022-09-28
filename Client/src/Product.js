import { useState } from "react";
import { useDispatch } from "react-redux";

function ProductComp(props) {

  const dispatch = useDispatch();


  return (
    <div>
    <div style={{width : "300px", borderStyle : "solid", borderColor : "green", borderWidth : "3px"}}>

        <h5>Product Data</h5>

        Name : {props.prodData.name} <br/>
        Price : {props.prodData.price} <br/>
        Serial No : {props.prodData.serialNo}
        Pic : <img src={props.prodData.pic} />
         <br/>

        <input type="button" value="Remove" onClick={ () => dispatch({type : "DELETE" , payload : {name : props.prodData.name , price : props.prodData.price }   }) } /><br/>
      
    </div>
    <br/>
    </div>

  );
}

export default ProductComp;
