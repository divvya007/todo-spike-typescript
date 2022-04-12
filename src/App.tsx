import React from "react";
import { Suspense } from "react";
import Home from "./pages/Home";
import Topics from "./pages/Topics";

const LazyComponent = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    Math.floor(Math.random() * 10) >= 1
      ? import("./pages/LazyPage")
      : Promise.reject(new Error())
  );
});
const Settings = React.lazy(() => import("./pages//Settings"));
function App() {
  return (
    <div className="App">
      <header className="App-header">some Header</header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Home />
      </nav>
      {/* <Topics /> */}

      <Suspense fallback={<div>...loading your favorite lazy component</div>}>
        <LazyComponent />
        <Settings />
      </Suspense>
    </div>
  );
}

export default App;
