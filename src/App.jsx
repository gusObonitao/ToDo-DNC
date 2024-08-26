import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Form from "./components/Form/Form";
// import { Router } from "./routing";

//utilizar esse mockup como exemplo



function App() {

  

  return (
    <div className="App" >
      
      <Router >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
