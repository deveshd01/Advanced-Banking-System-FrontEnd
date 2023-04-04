import React from 'react';
import'./Login.css';

const SignInPage = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: `
    <html>
    <head>
      <meta charset="utf-8">
      <title>Stackfindover: Sign in</title>
      <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    
    <body>
      <div class="login-root">
        <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
          <div class="loginbackground box-background--white padding-top--64">
            <div class="loginbackground-gridContainer">
              <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
                <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
                </div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
                <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
                <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
                <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
                <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
                <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
                <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
                <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
              </div>
              <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
                <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
              </div>
            </div>
          </div>
          <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
            <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1><a href="#" rel="dofollow">Login</a></h1>
            </div>
            <div class="formbg-outer">
              <div class="formbg">
                <div class="formbg-inner padding-horizontal--48">
                  <span class="padding-bottom--15">Sign in to your account</span>
                  <form id="stripe-login">
                    <div class="field padding-bottom--24">
                      <label for="email">Email</label>
                      <input type="email" name="email">
                    </div>
                    <div class="field padding-bottom--24">
                      <div class="grid--50-50">
                        <label for="password">Password</label>
                        <div class="reset-pass">
                          <a href="#">Forgot your password?</a>
                        </div>
                      </div>
                      <input type="password" name="password">
                    </div>
                    <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label for="checkbox">
                        <input type="checkbox" name="checkbox"> Stay signed in for a week
                      </label>
                    </div>
                    <div class="field padding-bottom--24">
                      <input type="submit" name="submit" value="Continue">
                    </div>
                    <div class="field">
                      <a class="ssolink" href="#">Use single sign-on (Google) instead</a>
                    </div>
                  </form>
                </div>
              </div>
              <div class="footer-link padding-top--24">
                <span>Don't have an account? <a href="">Sign up</a></span>
                <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                  <span><a href="#">©   Pratiti</a></span>
                  <span><a href="#">Contact</a></span>
                  <span><a href="#">Privacy & terms</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    
    </html>
    `}}></div>
  );
}

export default SignInPage;











// import './Login.css';
// import profile from "./a.png";
// import email from "./email.jpg";
// import pass from "./pass.png";
// function LoginUi() {
//   return (
//     <div className="main">
//      <div className="sub-main">
//        <div>
//          <div className="imgs">
//            <div className="container-image">
//              <img src={profile} alt="profile" className="profile"/>

//            </div>


//          </div>
//          <div>
//            <h2>Login </h2>
//            <div>
//              <img src={email} alt="email" className="email"/>
//              <input type="text" placeholder="user name" className="name"/>
//            </div>
//            <div className="second-input">
//              <img src={pass} alt="pass" className="email"/>
//              <input type="password" placeholder="password" className="name"/>
//            </div>
//            <div className="login-button">
//   <a href="your-login-page-url">
//     <button>Login</button>
//   </a>
// </div>

//             <p className="link">
//               <a href="#">Forgot password ?</a>  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <a href="#">Sign Up</a>
//             </p>
           
 
//          </div>
//        </div>
       

//      </div>
//     </div>
//   );
// }

// export default LoginUi;
