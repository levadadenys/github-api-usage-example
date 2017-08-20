import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

export default [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/users/:username',
    component: UserPage
  }
];