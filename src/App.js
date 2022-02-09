import React from "react";
import Router from './Component/Router'
import SignIN from './Component/SignIn'
import GlobleContext from "./Context/GlobleState";
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {

  return (
    <div>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobleContext>
          <Router />
        </GlobleContext>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;


