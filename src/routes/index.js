const express = require('express');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/users',
        route: userRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
