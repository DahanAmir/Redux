
import AddProductComp from './AddProduct'
import TotalPriceComp from './TotalPrice'
import ProductsComp from './Products'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function ProducDashboardComp() {

  const dispatch = useDispatch()


  useEffect(async () =>
  {
    let resp = await axios.get("http://localhost:8000/api/products");
    dispatch({ type : "LOADDATA" , payload : resp.data }) 
  },[])

  return (
    <div className="App">
        <div style={{width: "50%", float:"left"}}>

        <TotalPriceComp /> <br/><br/><br/><br/><br/>
          <AddProductComp />
      </div>

      <div style={{width: "50%", float:"right"}}>
       <ProductsComp />
      </div>
    </div>
  );
}

export default ProducDashboardComp;
