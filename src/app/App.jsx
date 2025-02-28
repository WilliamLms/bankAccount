import { Provider } from 'react-redux';  // Import the Provider
import store from './store';  // Import the Redux store

import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
export default function App() {
  return (
    // Wrap the entire app with the Provider to pass the store to components
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
}