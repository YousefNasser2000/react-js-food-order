import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCarIsShown] = useState(false)

  function showCardHandler(){
    setCarIsShown(true)
  }
    function HideCardHandler(){
    setCarIsShown(false)
  }
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
