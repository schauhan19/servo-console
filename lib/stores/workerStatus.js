var BaseStore = require('./base'),
  regions = require('_/constants/regions'),
  storeCache = {};

module.exports = function (params) {
  var scope = params.org + ':' + params.region + ':' + params.app + ':' + params.stack + ':' + params.workerId,
    url = regions[params.region].endpoint + '/orgs/' + params.org + '/apps/' + params.app + '/stacks/' + params.stack + '/workers/' + params.workerId + '/status';
  if (storeCache[scope]) return storeCache[scope];
  return storeCache[scope] = new BaseStore(url, {max: 30, refresh: 60, objectKey: 'timestamp'});
};
