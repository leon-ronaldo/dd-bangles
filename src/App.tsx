import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import { SearchProvider } from './contexts/SearchContext'
import Landing from './pages/Landing'
import Root from './pages/Root'
import FavoritesPage from './pages/Favourites'
import { Toaster } from 'react-hot-toast'
import About from './pages/About'

function App() {

  return (
    <>
      <SearchProvider>
        <div className='fixed z-9999'>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 2000,
              style: {
                fontSize: "14px",
              },
            }}
          />
        </div>
        <BrowserRouter>
          <Routes>
            {/* SMART ENTRY POINT */}
            <Route path="/" element={<Root />} />

            {/* ACTUAL PAGES */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorite" element={<FavoritesPage />} />
            <Route path="/onboarding" element={<Landing />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<About />} />
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
