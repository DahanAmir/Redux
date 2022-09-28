import { Route, Switch, Link } from "react-router-dom";
import CustomersComp from "./Customers";
import ProducDashboardComp from "./ProducDashboard";
import ProductsComp from "./Products";



function MainPageComp() {
  return (
    <div className="App">
      <h1>Welcome to our e-commerce </h1>

          <Link to="/customers">Customers</Link><br/>
          <Link to="/products">Products</Link><br/><br/>

          <Switch>
            <Route path="/customers">
                <CustomersComp />
            </Route>
            <Route path="/products">
                <ProducDashboardComp />
            </Route>
          </Switch>
    </div>
  );
}

export default MainPageComp;
