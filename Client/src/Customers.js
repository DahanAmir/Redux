
import axios from 'axios'
import { useEffect, useState } from 'react';

function CustomersComp() {

  const [customers, setCustomers] = useState([])

  useEffect(async () =>
  {
    let resp = await axios.get("http://localhost:8000/api/customers");
    setCustomers(resp.data);
  },[])


  return (
    <div style={{width : "800px", borderStyle : "solid", borderColor : "blue", borderWidth : "3px"}}>
          <h3>Customers Page</h3>

          <table border="1">
            {
              customers.map(item =>
                {
                  return <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address?.city}</td>
                  </tr>
                })
            }
          </table>
    </div>
  );
}

export default CustomersComp;
