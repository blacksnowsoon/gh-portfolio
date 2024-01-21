import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <Header />
        {children}
      <Footer /> 
    </ErrorBoundary>
  );
};
