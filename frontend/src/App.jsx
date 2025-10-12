import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useUserStore } from './stores/useUserStore'
import LoadingSpinner from './components/LoadingSpinner'
import AdminPage from './pages/AdminPage'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import { useCartStore } from './stores/useCartStore'
import PurchaseSuccessPage from './pages/PurchaseSuccessPage'
import PurchaseCancelPage from './pages/PurchaseCancelPage'

const App = () => {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const { getCartItems } = useCartStore();
  useEffect(() => { 
    checkAuth();
  }, [checkAuth]);

 useEffect(() => {
   if (!user) return;

   getCartItems();
 }, [getCartItems, user]);

  if (checkingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
        bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25)_0%,rgba(29,78,216,0.15)_40%,rgba(11,15,25,0.95)_100%)]
        after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2)_0%,rgba(11,15,25,0.9)_60%,transparent_100%)]"
          />
        </div>
      </div>

      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/secret-dashboard"
            element={
              user?.role === "admin" ? (
                <AdminPage />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route
            path="/cart"
            element={user ? <CartPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/purchase-success"
            element={
              user ? <PurchaseSuccessPage /> : <Navigate to={"/login"} />
            }
          />
          <Route
            path="/purchase-cancel"
            element={
              user ? <PurchaseCancelPage /> : <Navigate to={"/login"} />
            }
          />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
