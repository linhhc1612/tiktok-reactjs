// Layouts
import { DefaultLayout, HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/profile', component: Profile, layout: null },
    { path: '/search', component: Search, layout: null },
];

// Privite routes
const priviteRoutes = [];

export { publicRoutes, priviteRoutes };
