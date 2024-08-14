import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { UserProfile } from "./components/UserProfile";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
      <Login />
      <Signup />
      <UserProfile />
    </>
  );
};
