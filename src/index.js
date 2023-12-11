import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { App } from 'components/App';

import { store, persist } from 'components/redux/store';


// const theme = {
//   colors: {
//     black: '#212121',
//     white: '#fff',
//     success: 'green',
//     warning: 'orange',
//     error: 'red',
//   },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persist={persist}>
        <BrowserRouter basename="/react_template_lesson_9">
          {/* <ThemeProvider theme={theme}> */}
          <App />
          <GlobalStyle />
          {/* </ThemeProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
