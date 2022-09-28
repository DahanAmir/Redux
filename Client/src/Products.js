import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComp from "./Product";
import axios from 'axios'

function ProductsComp() {

  const storeData = useSelector(state => state)
 
  const [product, setProduct] = useState({name : '', price : 0})

  const makeOrder = () =>
  {
    storeData.products.forEach(prod => {
        axios.post("http://localhost:8000/api/products", prod)
    });
  }

  return (
    <div style={{width : "400px", borderStyle : "solid", borderColor : "blue", borderWidth : "3px"}}>

        <h3>Current Products in Order</h3>

        <input type="button" value="Approve Order !" onClick={makeOrder} /><br/><br/>

        {
          storeData.products.map((item,index) =>
          {
            return <ProductComp prodData={item} key={index} />
          })
        }
       
    </div>
  );
}

export default ProductsComp;
