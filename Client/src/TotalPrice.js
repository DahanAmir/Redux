import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function TotalPriceComp(props) {

  const storeData = useSelector(state => state)
  const [totalPrice , setTotalPrice] = useState(0)

  useEffect(() =>
  {
    let total = 0
    storeData.products.forEach(prod => {
      total += parseInt(prod.price)
    });

    setTotalPrice(total)
  }, [storeData.products.length])


  return (
    <div style={{width : "200px", height : "100px", borderStyle : "solid", borderColor : "red", borderWidth : "3px"}}>

       Total Price : {totalPrice}
    </div>
  );
}

export default TotalPriceComp;
