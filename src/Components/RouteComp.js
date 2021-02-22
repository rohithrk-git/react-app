import React ,{useState,useEffect}from 'react';
import ListOfItems from './ListOfitems'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

const RouteComp = () =>{

     const [items,setitems] = useState([]);
      
        useEffect(()=>{

          getCountries();

        },[]);
      
        const getCountries = async ()=>{
          const response = await fetch("https://restcountries.eu/rest/v2/all");
          const data = await response.json();
          setitems(data);
           console.log(items);
          // console.log(data[50].name);
        }

    return (
        <div>
        <BrowserRouter>

            <div className="App">
            
            <nav>
           <h1>Standard Dropdown</h1>
            </nav>

            <Switch>
            <Route path="/" component = {ListOfItems}><ListOfItems items={items}/></Route>
            <Route path="/ListOfUsers" component = {ListOfItems}><ListOfItems items={items}/></Route>
            </Switch>
            
            </div>

        </BrowserRouter>
            

        </div>
    )
}
export default RouteComp;