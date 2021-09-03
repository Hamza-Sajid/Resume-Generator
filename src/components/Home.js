import React from 'react';
import Option  from './Option';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  const history = useHistory();

  return (
/* <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */

<div>
  
<div className="container text-center my-5 ">

<div className="card text-white bg-dark mb-3 d-inline-flex p-4" style={{width: '30rem', height: '25em'}}>
  <img style={{display: 'block', width: '180px' , height: '180px' , margin: 'auto'}}  src="https://www.clipartmax.com/png/full/49-498849_logo-suprem-pizza-logos-de-pizzerias-png.png"  className="card-img-top  " alt="..." />
  
  <div className="card-body">
    <h5 className="card-title">Circle Pizza!</h5>
    <p className="card-text">Now order your favorite pizaa online with few taps</p>
    <a onClick={() => history.push('/Option')} href="#" className="btn btn-primary my-4">Let's Order</a>
    




  </div>
</div>


</div>

{/* <BrowserRouter>
<Link to="/Option"><button>Narwhal</button></Link>

<Switch>
          <Route  path="/option">
            <Option/>
          </Route>
          </Switch>
</BrowserRouter> */}
</div>
  )
}