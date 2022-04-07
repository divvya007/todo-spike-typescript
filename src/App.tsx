import React from "react";
import { BrowserRouter as Link, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <header className="App-header">some Header</header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      ></nav>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />}>
          aboutus
        </Route>
      </Routes>
    </div>
  );
}

export default App;
