const roles = ['user', 'admin'];

const roleRights = new Map();

roleRights.set(roles[0], [
  'getUserPaymentMethod',
  'manageUserPaymentMethods',
  'getPaymentGateway',
  'managePaymentGateway',
  'managePlot',
]);
roleRights.set(roles[1], [
  'getUsers',
  'manageUsers',
  'getUserPaymentMethod',
  'manageUserPaymentMethods',
  'getPaymentGateway',
  'managePaymentGateway',
  'getPayments',
  'updatePaymentGateway',
  'managePlot',
  'manageDefinition',
  'manageFeature',
]);

module.exports = {
  roles,
  roleRights,
};
