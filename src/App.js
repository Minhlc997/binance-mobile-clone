import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header/Header';
import Chart from './components/Chart/Chart';
import OrderBook from './components/OrderBook/OrderBook';
import RecentTrades from './components/Trades/RecentTrades';
import OrderForm from './components/OrderForm/OrderForm';
import Positions from './components/Positions/Positions';
import BalanceAdjuster from './components/Balances/BalanceAdjuster'; // Import
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
    return (
        <AppProvider>
            <div className="app">
                <Header />
                <div className="main-content">

                    <div className='chart'>
                    <Chart />
                    </div>

                    <div className='orderbook'>
                     <OrderBook />
                    </div>

                     <div className='trades'>
                    <RecentTrades />
                    </div>

                </div>
                <OrderForm />
                <Positions />
                <BalanceAdjuster />
                <Footer />

            </div>

        </AppProvider>
    );
}

export default App;