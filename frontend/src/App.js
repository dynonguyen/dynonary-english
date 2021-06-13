import { ThemeProvider } from '@material-ui/core/styles';
import routerConfig from 'configs/routerConfig';
import theme from 'configs/theme';
import useTheme from 'hooks/useTheme';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const { routes, renderRoutes } = routerConfig;

const isAuth = true;
function App() {
  // get and set theme
  useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="dynonary-app">
          <Suspense fallback={<>Loading ... </>}>
            <Switch>
              {renderRoutes(routes, isAuth)}
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
