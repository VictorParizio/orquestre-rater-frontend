import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Signup } from "./components/Signup";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
      <Signup />
    </>
  );
};
