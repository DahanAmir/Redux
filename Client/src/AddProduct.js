import { useState } from "react";
import { useDispatch } from "react-redux";

function AddProductComp() {

  const dispatch = useDispatch();

  const [product, setProduct] = useState({name : '', price : 0, serialNo : '', pic : ''})

  return (
    <div style={{width : "400px", height : "200px", borderStyle : "solid", borderColor : "red", borderWidth : "3px"}}>

        <h3>Order New Product</h3>

        Name : <input type="text" onChange={e => setProduct({...product, name : e.target.value}) } /><br/>
        Price : <input type="text" onChange={e => setProduct({...product, price : e.target.value}) } /><br/>
        Serial No : <input type="text" onChange={e => setProduct({...product, serialNo : e.target.value}) } /><br/>
        Puc Path : <input type="text" onChange={e => setProduct({...product, pic : e.target.value}) } /><br/>
        <input type="button" value="Add" onClick={() => dispatch({ type : "ADD" , payload : product }) } />
    </div>
  );
}

export default AddProductComp;
