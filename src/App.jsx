import {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Router } from './general/Router.jsx';
import {Loading} from './components/Loading.jsx';
import Header from './components/Header';

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
        
    </Suspense>
  </BrowserRouter>
);
