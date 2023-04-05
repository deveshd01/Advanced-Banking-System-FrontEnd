
import './App.css';
import Counter from './Counter/Counter';
import AddForm from './Executive/AddExecutive/AddForm';
import Executive from './Executive/Executive';
import TokenForm from './GenerateToken/TokenForm';
import Login from './Login/Login';
import Manager from './Manager/Manager';
import Service from './Services/Service';


// axios.get(`${baseURL}/1`).then((response) => {
//   setPost(response.data);
// });

// axios.post(baseURL, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });


  // useEffect(() => {
  //   axios.get(baseURL + '/showAllServices').then((response) => {
  //     setServices(response.data);
  //   });
  // }, [])

function App() {
  return (
    <>
    <Login/>

    {/* <TokenForm/> */}

    {/* <Manager/> */}
    {/* <Service/> */}
    {/* <AddForm obj={{
                  url:"/addExecutive", 
                  heading:"Add Executive", 
                  one:"name", 
                  two:"email", 
                  three:"mob", 
                  four:"password"} } /> */}

    {/* <AddForm obj={{
                  url:"/loginExecutive",
                  heading:"mail",
                  one:"ePassword",
                  two:"Email",
                  three:"counterNumber",
                  four:"cPassword" }}/> */}
    {/* <Counter/> */}
   
   </>
    
  );
}

export default App;
