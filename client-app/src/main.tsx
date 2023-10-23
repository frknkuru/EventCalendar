import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
import { StoreContext, store } from './app/stores/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
// </React.StrictMode>)
)
