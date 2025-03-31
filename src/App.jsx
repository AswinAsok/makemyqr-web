import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import LandingPage from "./pages/LandingPage"
import Privacy from "./pages/Privacy"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App