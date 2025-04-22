import {Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navbar from './components/Navbar';
import 'glightbox/dist/css/glightbox.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTopButton from './components/ScrollToTopButton';
export const PageWithHeader = ({children}) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense"/>
        </PageWithHeader>
      }
    >
    
    <Navbar />
    <main >
      <Router/>
    </main>
    <ScrollToTopButton />  
      <Analytics />
      <SpeedInsights />
    </Suspense>
  </BrowserRouter>
);
