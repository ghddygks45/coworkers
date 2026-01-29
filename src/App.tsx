import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={}>
        <>
          <h1 className="text-3xl font-bold text-red-500 underline">
            Hello world!
          </h1>
        </>
      </Route>
    </Routes>
  );
}

export default App;
