import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  react: '16.x'
}, 'thereactivestack:blazetoreact');

if (Meteor.isServer) {
  BlazeToReact = require('./BlazeToReact-server.jsx').default;
} else {
  BlazeToReact = require('./BlazeToReact-client.jsx').default;
}

export default BlazeToReact;
