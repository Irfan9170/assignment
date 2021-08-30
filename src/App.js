

import {Switch,Route} from 'react-router-dom';

import Body from './components/Rectangle/Rectangle';


function App() {
  return (
    
   
       <Switch>
          <Route exact path="/">
               <Body />
          </Route>
          
        </Switch>
     
  
  );
}

export default App;
