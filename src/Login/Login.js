import React, { useState } from 'react';
import './Login.css';
import { loginHTML } from './Login.html';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hardcodedEmail = "saurabhpratiti@gmail.com";
    const hardcodedPassword = "devesh123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      console.log('Login successful');
      alert('Login successful!');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div dangerouslySetInnerHTML={{ __html: loginHTML }}></div>
  );
};

export default Login;


































// import React, { useState } from 'react';
// import'./Login.css';
// import { loginHTML } from './Login.html';

// const SignInPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
  
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const hardcodedEmail = "saurabhpratiti@gmail.com";
//     const hardcodedPassword = "devesh123";
      
//     if(email === hardcodedEmail && password === hardcodedPassword) {
//       console.log('Login successful');
//       alert('Login successful!');
//     } else {
//       console.log('Login failed');
//     }
//   }
  
//   return (
//     <div dangerouslySetInnerHTML={{__html: loginHTML}}></div>
//   );
// }

// export default SignInPage;
