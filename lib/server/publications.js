Meteor.publish('leaderboardUsers', function(selector, options, limit) {
  return Meteor.users.find(selector, options);
});
