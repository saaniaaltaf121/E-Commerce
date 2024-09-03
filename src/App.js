import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar'; 
import Banner from './components/Banner';
import Features from "./features/features";
import ProductList from './components/ProductList';

import  Footer from './components/footer';
function App() {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <Banner/>
                <Features/>
                <ProductList/>
                
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
