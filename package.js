Package.describe({
  summary: 'Telescope user leaderboard – reported community activity to increase engagement and competition',
  version: '0.1.0',
  name: 'telescope-user-leaderboard'
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'iron:router',                // routing package
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss'              // SCSS compilation package
  ]);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating'                  // required for client-side templates
  ], ['client']);



  // ---------------------------------- 2. Files to include ----------------------------------

 // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.add_files([
    'lib/hooks.js',
    'lib/awesomeness_score.js',
    'lib/router.js'
  ], ['client', 'server']);

  // client

  api.add_files([
    'lib/client/templates/leaderboard_nav_button_template.html',
    'lib/client/templates/leaderboard_user_template.html',
    'lib/client/templates/leaderboard_user_template.js',
    'lib/client/templates/leaderboard_template.html',
    'lib/client/templates/leaderboard_template.js',
    'lib/client/stylesheets/custom.scss'
  ], ['client']);

  // server

  api.add_files([
    'lib/server/migration.js',
    'lib/server/publications.js'
  ], ['server']);

  // i18n languages (must come last)

  api.add_files([
    'i18n/en.i18n.json',
  ], ['client', 'server']);

  api.export([
    'user_rating_weightings',
    'calculateAwesomenessScore'
  ]);
});