import config from '~/configs';

// Layouts
import { DefaultLayout, HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.following, component: Following, layout: DefaultLayout },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile, layout: DefaultLayout },
    { path: config.routes.search, component: Search, layout: null },
];

// Privite routes
const priviteRoutes = [];

export { publicRoutes, priviteRoutes };
