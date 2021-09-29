const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const plotRoute = require('./plot.route');
const exportPlotRoute = require('./exportPlot.route');
const userPaymentMethodRoute = require('./userPaymentMethod.route');
const paymentGatewayRoute = require('./paymentGateway.route');
const projectRoute = require('./project.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const definitionRoute = require('./definition.route');
const featureRoute = require('./feature.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/plot',
    route: plotRoute,
  },
  {
    path: '/exportPlot',
    route: exportPlotRoute,
  },
  {
    path: '/payment-method',
    route: userPaymentMethodRoute,
  },
  {
    path: '/payment-gateway',
    route: paymentGatewayRoute,
  },
  {
    path: '/project',
    route: projectRoute,
  },
  {
    path: '/definition',
    route: definitionRoute,
  },
  {
    path: '/feature',
    route: featureRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
