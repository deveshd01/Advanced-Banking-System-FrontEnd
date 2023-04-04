import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="nav-left">
            <button className="nav-btn" onClick={() => alert("Home button clicked")}>Home/Cancel</button>
            
            <span className="EX" >Executive</span>
                
          </div>
          
          <div className="nav-right">
            <button className="nav-btn" onClick={()=> alert("Counter is closed!")}>Counter Closed</button>
          </div>
        </nav>
      </header>
      <footer className="footer">
        <button className="footer-btn"   onClick={() => alert("DONE button clicked")}>DONE</button>
        <button className="footer-btn" onClick={() => alert("NEXT button clicked")}>NEXT</button>
      </footer>
    </div>
  );
}

export default Header;


