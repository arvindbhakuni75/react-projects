import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from './Navbar';
import { Provider } from 'react-redux';
import store from '../store/store';

function RootLayout() {
  return (
    <>
    <Provider store={store} >
      <Navigationbar />

      <main>
        <Outlet />
      </main>
      </Provider>
    </>
  )
}

export default RootLayout
