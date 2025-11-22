import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Cart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  console.log(cartData);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowCartDetails = () => {
    setShowCart(true);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    handleShowCartDetails();
  };

  const handleHideCartDetails = () => {
    setShowCart(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <header>
        {showCart && (
          <CartDetails movie={selectedMovie} onClose={handleHideCartDetails} />
        )}
        <nav className="dark:bg-gray-800 bg-white dark:text-white text-dark container mx-auto flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="moon"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleShowCartDetails}
              >
                <img src={Cart} width="24" height="24" alt="cart" />
                {cartData.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-(--primary-color) text-white text-xs font-semibold leading-4 rounded-full w-5 h-5 flex items-center justify-center">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
