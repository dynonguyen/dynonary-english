import { ThemeProvider } from '@material-ui/core/styles';
import GlobalLoading from 'components/UI/GlobalLoading';
import Message from 'components/UI/Message';
import routerConfig from 'configs/routerConfig';
import theme from 'configs/theme';
import useTheme from 'hooks/useTheme';
import NotFoundPage from 'pages/NotFound';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const { routes, renderRoutes } = routerConfig;

// @fake-data
const isAuth = true;

function App() {
  // get and set theme
  useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="dynonary-app">
          {/* routes */}
          <Suspense fallback={<GlobalLoading />}>
            <Switch>
              {renderRoutes(routes, isAuth)}
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </Suspense>

          {/* overlay */}
          <div id="_overlay"></div>

          {/* message */}
          <Message />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
