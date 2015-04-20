Meteor.publish('leaderboardUsers', function(selector, options, limit) {
  options.limit = limit || 10;
  return Meteor.users.find(selector, options);
});
