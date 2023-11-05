const express = require('express');
const propertyRoute = require('./property.routes');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/properties',
        route: propertyRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
