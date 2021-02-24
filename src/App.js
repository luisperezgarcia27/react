/* eslint-disable import/no-dynamic-require */
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TranslatorProvider } from 'react-translate';
import { Provider } from 'react-redux';
import configureStore from './redux/store/Store';

import Home from './pages/Home';

import { LangContext } from './components/Context';

import './App.css';

const store = configureStore();
function App() {
  const [lang, setLang] = useState(localStorage.getItem('Lang') || 'en');

  useEffect(() => {
    if (localStorage.getItem('Lang') === null) {
      localStorage.setItem('Lang', 'en');
    }
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <LangContext.Provider value={{ lang, setLang }}>
          <TranslatorProvider
            // eslint-disable-next-line global-require
            translations={require(`./assets/lang/${lang}.json`)}
          >
            <BrowserRouter>
              <Switch>
                <Route path="/">
                  <Home name="home" />
                </Route>
              </Switch>
            </BrowserRouter>
          </TranslatorProvider>
        </LangContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
