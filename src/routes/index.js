const express = require('express');
const propertyRoute = require('./property.routes');
const testRoute = require('./test.routes');
const ownerRoute = require('./owner.routes');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/properties',
        route: propertyRoute,
    },
    {
        path: '/test',
        route: testRoute,
    },
    {
        path: '/owners',
        route: ownerRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
