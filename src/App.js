import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import OrderHistoryPage from './pages/OrderHistoryPage'
import NewOrderPage from './pages/NewOrderPage'
import AuthPage from './pages/AuthPage'
import NavBar from "./components/NavBar";
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? 
      <>
      <NavBar/>
    <Routes>
      <Route path="/orders/new" element={<NewOrderPage/>}/>
      
      <Route path="/orders" element={<OrderHistoryPage/>}/>
    </Routes>
    </>
    :
    <AuthPage/>
      }
    </main>
  );
}

export default App;
