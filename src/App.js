import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const headerButtonClickHandler = () => {
    setcartIsShown(true);
  };

  const cartCloseHandler = () => {
    setcartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartCloseHandler} />}
      <Header onHeaderButtonClick={headerButtonClickHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
