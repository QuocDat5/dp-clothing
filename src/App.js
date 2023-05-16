import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import store from "./redux/store";

// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="overflow-hidden">
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>

                <Sidebar />
                <Footer />
            </Router>
        </div>
    );
}

// function App() {
//     return (
//         <BrowserRouter>
//             {/* <Provider store={store}> */}
//             <Suspense fallback="loading">
//                 <div>Dat Phan</div>
//                 <div>Iu</div>
//                 <div>Kieu Khanh</div>
//             </Suspense>
//             {/* </Provider> */}
//         </BrowserRouter>
//     );
// }

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 {/* <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p> */}
//                 <p>Dat Phan</p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;
