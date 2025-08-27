import { Route, Routes } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import SideBar from "./components/sidebar/SideBar"
import List from "./pages/list/List"
import Orders from "./pages/orders/Orders"
import Add from "./pages/add/Add"
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactTostify.css';

function App() {
  
const url="http://localhost:4000";
  return (
    <>
    <ToastContainer/>
      <NavBar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
