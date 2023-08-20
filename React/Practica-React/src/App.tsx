import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Props from "./components/Props/Props";
import State from "./components/State/State";
import Events from "./components/Events/Events";
import ConditionalRender from "./components/Conditional-Render/ConditionalRender";
import Refs from "./components/Refs/Refs";
import Context from "./components/Context/Context";
import DataFetched from "./components/HOC/Hoc";
/*
import State from "./components/State";
import RenderCondi from "./components/Renderizado-Condicional/RenderCondi";
import Refs from "./components/Refs/Refs";
import PaitingList from "./components/PaintingList/PaitingList";
import Hooks from "./components/Hooks/Hooks";
import Hoc from "./components/HOC/Hoc";
import Events from "./components/Events/Events";
import Context from "./components/Context/Context";*/

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/Props" element={<Props />} />
        <Route path="/State" element={<State />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Conditional-Render" element={<ConditionalRender />} />
        <Route path="/Refs" element={<Refs />} />
        <Route path="/Context" element={<Context />} />
        <Route
          path="/HOC"
          element={
            <DataFetched url="https://jsonplaceholder.typicode.com/posts" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
