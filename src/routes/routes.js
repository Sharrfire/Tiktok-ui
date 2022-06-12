import config from '~/config';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//Layout
import { HeaderOnly } from '~/layouts';

//PublicRoutes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  //   { path: '/', component: Home, layout: DefaultLayout },
  //   { path: '/following', component: Following, layout: DefaultLayout },
  //   { path: '/profile', component: Profile, layout: null },
  //   { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
