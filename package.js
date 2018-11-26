Package.describe({
  name: 'meteorblackbird:blazetoreact',
  version: '1.0.3',
  summary: 'Transform a Blaze template into a React.js component while keeping the reactivity',
  git: 'https://github.com/flyblackbird/meteor-blazetoreact.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use(['tmeasday:check-npm-versions@0.2.0', 'jsx@0.2.3']);
  api.use(['blaze@2.1.0'], 'client');

  api.export('BlazeToReact');
  api.mainModule('lib/BlazeToReact.jsx');
});
