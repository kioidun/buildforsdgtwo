import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <div class="container">
        <nav class="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#form">Form</a>
            </li>
          </ul>
        </nav>
        <section id="home">
          <h1>COVID-19 Health Simulator</h1>
          <p>Build for SDG</p>
        </section>
        <section id="formLoading">
          <h1>Fill in the form</h1>
          <Form />
        </section>
      </div>
    );
  }
}

export default App;
