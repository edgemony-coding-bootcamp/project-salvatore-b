import "../styles/globals.css";
import { MyContextProvider } from "../Context/context";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
