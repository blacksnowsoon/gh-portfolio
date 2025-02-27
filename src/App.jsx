import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Router } from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import Header from './components/Header';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

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
      <Header/>
      <main >
        <Router/>
      </main>
      <Analytics />
      <SpeedInsights />
    </Suspense>
  </BrowserRouter>
);
