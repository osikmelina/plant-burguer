import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes