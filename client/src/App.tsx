import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoPage from "./components/TodoPage/TodoPage.tsx";
import AuthRootComponent from "./components/Auth/AuthRootComponent/AuthRootComponent.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<AuthRootComponent />} />
        <Route path={"/register"} element={<AuthRootComponent />} />
        <Route path={"todo"} element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
