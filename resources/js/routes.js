import Home from './components/public/Home';
import Dashboard from './components/admin/Dashboard';

export const routes = [
  { path: '', component: Home },
  { path: '/admin', component: Dashboard}
];