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
const FastGamePage = React.lazy(() => import('pages/PlayGames/FastGame'));
const GrammarPage = React.lazy(() => import('pages/Grammar'));
const FavoriteDictionaryPage = React.lazy(() =>
  import('pages/FavoriteDictionary'),
);
const IrregularVerbPage = React.lazy(() => import('pages/IrregularVerb'));
const ForgotPasswordPage = React.lazy(() => import('pages/ForgotPassword'));
const UserAccountPage = React.lazy(() => import('pages/UserAccount'));
const LeaderBoardPage = React.lazy(() => import('pages/LeaderBoard'));

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
  {
    path: ROUTES.FAVORITE,
    exact: false,
    isProtect: true,
    component: () => <FavoriteDictionaryPage />,
  },
  {
    path: ROUTES.IRREGULAR,
    exact: false,
    isProtect: false,
    component: () => <IrregularVerbPage />,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    exact: false,
    isProtect: false,
    component: () => <ForgotPasswordPage />,
  },
  {
    path: ROUTES.USER_ACCOUNT,
    exact: false,
    isProtect: true,
    component: () => <UserAccountPage />,
  },
  {
    path: ROUTES.LEADERBOARD,
    exact: false,
    isProtect: true,
    component: () => <LeaderBoardPage />,
  },
  {
    path: ROUTES.GAMES.FAST_GAME,
    exact: false,
    isProtect: false,
    component: () => <FastGamePage />,
  },
];

const renderRoutes = (routes, isAuth = false) => {
  return routes.map((route, index) => {
    const { path, exact, component, isProtect } = route;
    const loginComponent = () => <LoginPage />;
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
