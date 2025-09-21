import React from 'react';
import '../App.css';




function App() {
  return (
    <div className="cover-page">
      <div className="content">
        <button style={{color:'black',boxShadow: '2px 2px 10px rgba(157, 157, 158, 0.5)'}} className="assigment-button" onClick={() => window.location.href = "/home"}>
          ASSIGNMENT
        </button>
        <h1 style={{fontSize:'70px', fontWeight:'bold'}} className="heading">UI DEVELOPER</h1>
        <h1 style={{fontSize:'80px', fontWeight:'bold'}}>ASSIGMENT</h1>
        <p style={{ fontFamily: "'Space Mono', monospace",fontWeight: 200,fontSize: '20px',textTransform: 'uppercase',color: '#ffffff'}}>Company</p>
        <p   style={{fontFamily: "'Space Mono', monospace",fontWeight: 200,fontStyle: 'normal',fontSize: '20px',color: '#ffffff' }}>Justpay Technologies Private Limited</p>
      </div>
    </div>
  );
}

export default App;
