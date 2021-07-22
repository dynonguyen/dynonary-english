import { ThemeProvider } from '@material-ui/core/styles';
import Navigation from 'components/Navigation';
import SpeedDials from 'components/SpeedDial';
import GlobalLoading from 'components/UI/GlobalLoading';
import Message from 'components/UI/Message';
import routerConfig from 'configs/routerConfig';
import theme from 'configs/theme';
import useTheme from 'hooks/useTheme';
import useVoice from 'hooks/useVoice';
import NotFoundPage from 'pages/NotFound';
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Element } from 'react-scroll';
import { getUserInfo } from 'redux/slices/userInfo.slice';

const { routes, renderRoutes } = routerConfig;

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userInfo);

  // get and set theme
  useTheme();

  // get window voice and set custom voice
  useVoice();

  // get user info
  useEffect(() => {
    dispatch(getUserInfo());
    setLoading(false);
    return () => {};
  }, []);

  return (
    <>
      {loading ? (
        <GlobalLoading />
      ) : (
        <ThemeProvider theme={theme}>
          <Router>
            <div className="dynonary-app">
              <Element name="scrollTop" />
              <Navigation />

              {/* routes */}
              <Suspense fallback={<GlobalLoading />}>
                <Switch>
                  {renderRoutes(routes, isAuth)}
                  <Route>
                    <NotFoundPage />
                  </Route>
                </Switch>
              </Suspense>

              {/* common component */}
              <div id="_overlay"></div>
              <Message />
              <SpeedDials />
            </div>
          </Router>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
