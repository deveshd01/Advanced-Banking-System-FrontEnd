import React from 'react';
import './App.css';
 import Header from './Header';


import './Login/Login'
import SignInPage from './Login/Login';
import AddServiceForm from'./Services/Service.js';
import TokenForm from './Token/TokenForm.js';
import Counter from'./Counter/Counter.js'
import CounterExecutive from './Executive/Executive';
import Executive from './Executive/Executive';
import AllServices from './Services/AllServices.js';
import Manager from './Manager.js';
//import addExecutive from './Executive/AddExecutive';
//import TokenForm from'./Toke/token.js';


function App() {
  return (
    <div className="App">
      {/* <TokenForm/> */}
      {/* <SignInPage/> */}
      {/* <AddServiceForm/> */}
      {/* <Counter/> */}
      {/* <CounterExecutive/> */}
      {/* <AllServices/> */}
      {/* <addExecutive/> */}
      <Manager/>
     {/* <Header/>  */}
   {/* <Login/> */}
     
    </div>
  );
}

export default App;
 













// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
