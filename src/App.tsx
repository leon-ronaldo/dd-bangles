import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import { SearchProvider } from './contexts/SearchContext'
import Landing from './pages/Landing'
import Root from './pages/Root'

function App() {

  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            {/* SMART ENTRY POINT */}
            <Route path="/" element={<Root />} />

            {/* ACTUAL PAGES */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/onboarding" element={<Landing />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:productName" element={<ProductPage />} />

            {/* FALLBACK */}
            <Route path="*" element={<Root />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App
