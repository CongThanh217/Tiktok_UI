import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import {HeaderOnly} from '~/Components/Layout'

// Public Routes : không cần login vẫn chuyển hướng được
const publicRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/following',
        element: Following,
    },
    {
        path: '/profile',
        element: Profile,
        layout : null
    },
    {
        path: '/upload',
        element: Upload,
        layout : HeaderOnly
    },
];

// Private Routes : login để chuyển hướng
const privateRoutes = [];

export { publicRoutes, privateRoutes };
