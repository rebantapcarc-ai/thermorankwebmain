import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Results from './pages/Results';
import About from './pages/About';
import Contact from './pages/Contact';
import HVACSEO from './pages/HVACSEO';
import HVACWebDesign from './pages/HVACWebDesign';
import HVACLeadGen from './pages/HVACLeadGen';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/solutions/hvac-seo" element={<HVACSEO />} />
                    <Route path="/solutions/hvac-web-design" element={<HVACWebDesign />} />
                    <Route path="/solutions/hvac-lead-gen" element={<HVACLeadGen />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
