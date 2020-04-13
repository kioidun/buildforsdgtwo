import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './component/form';

function App() {
  return (
    <div class ="container">
        <nav class = "navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#form">Form</a></li>
            </ul>
        </nav>
        <section id="homehome">
            <h1>COVID-19 Health Simulator</h1>
            <p>Build for SDG</p>
        </section>
        <section id="form">
            <h1>Fill in the form</h1>
             <Forms />
         </section>       
    </div>
  );
}

export default App;
