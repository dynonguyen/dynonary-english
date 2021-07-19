import Logout from 'components/Logout';
import { ROUTES } from 'constant';
import HomePage from 'pages/Home';
import React from 'react';
import { Route } from 'react-router';
const RegisterPage = React.lazy(() => import('pages/Register'));
const LoginPage = React.lazy(() => import('pages/Login'));
const IPAPage = React.lazy(() => import('pages/IPA'));
const ContributionPage = React.lazy(() => import('pages/Contribution'));
const PlayGamesPage = React.lazy(() => import('pages/PlayGames'));
const FlashcardPage = React.lazy(() => import('pages/Flashcard'));
const DynoDictionaryPage = React.lazy(() => import('pages/DynoDictionary'));
const CommunicationPhrasePage = React.lazy(() =>
  import('pages/CommunicationPhrase'),
);
const CorrectWordPage = React.lazy(() => import('pages/PlayGames/CorrectWord'));
const WordMatchGamePage = React.lazy(() => import('pages/PlayGames/WordMatch'));
const GrammarPage = React.lazy(() => import('pages/Grammar'));

// routes for app
const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    isProtect: false,
    component: () => <HomePage />,
  },
  {
    path: ROUTES.LOGIN,
    exact: true,
    isProtect: false,
    component: () => <LoginPage />,
  },
  {
    path: ROUTES.REGISTER,
    exact: true,
    isProtect: false,
    component: () => <RegisterPage />,
  },
  {
    path: ROUTES.IPA,
    exact: true,
    isProtect: false,
    component: () => <IPAPage />,
  },
  {
    path: ROUTES.CONTRIBUTION,
    exact: true,
    isProtect: false,
    component: () => <ContributionPage />,
  },
  {
    path: ROUTES.LOGOUT,
    exact: true,
    isProtect: false,
    component: () => <Logout />,
  },
  {
    path: ROUTES.GAMES.HOME,
    exact: true,
    isProtect: false,
    component: () => <PlayGamesPage />,
  },
  {
    path: ROUTES.GAMES.CORRECT_WORD,
    exact: true,
    isProtect: false,
    component: () => <CorrectWordPage />,
  },
  {
    path: ROUTES.GAMES.WORD_MATCHING,
    exact: true,
    isProtect: false,
    component: () => <WordMatchGamePage />,
  },
  {
    path: ROUTES.FLASHCARD,
    exact: true,
    isProtect: false,
    component: () => <FlashcardPage />,
  },
  {
    path: ROUTES.DYNO_DICTIONARY,
    exact: false,
    isProtect: false,
    component: () => <DynoDictionaryPage isTOEIC={false} />,
  },
  {
    path: ROUTES.TOEIC_DICTIONARY,
    exact: false,
    isProtect: false,
    component: () => <DynoDictionaryPage isTOEIC={true} />,
  },
  {
    path: ROUTES.COMMUNICATION_PHRASE,
    exact: true,
    isProtect: false,
    component: () => <CommunicationPhrasePage />,
  },
  {
    path: ROUTES.GRAMMAR,
    exact: false,
    isProtect: false,
    component: () => <GrammarPage />,
  },
];

const renderRoutes = (routes, isAuth = false) => {
  return routes.map((route, index) => {
    const { path, exact, component, isProtect } = route;
    const loginComponent = () => <>Login Page</>;
    const componentRender = !isProtect
      ? component
      : isAuth
      ? component
      : loginComponent;

    return (
      <Route
        path={path}
        exact={exact}
        key={index}
        component={componentRender}
      />
    );
  });
};

export default {
  routes,
  renderRoutes,
};
