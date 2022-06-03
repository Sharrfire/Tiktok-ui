import routeConfig from '~/configs/routes';
import { HeaderOnly } from '~/components/Layouts';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//Layout
<HeaderOnly />;
//PublicRoutes
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.search, component: Search, layout: null },
  { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
  //   { path: '/', component: Home, layout: DefaultLayout },
  //   { path: '/following', component: Following, layout: DefaultLayout },
  //   { path: '/profile', component: Profile, layout: null },
  //   { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
