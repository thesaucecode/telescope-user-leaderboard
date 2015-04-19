Meteor.startup(function() {
  Meteor.methods({
    updateAwesomenessScore: function (userId) {
      var user = Meteor.users.findOne(userId);
      var awesomeness = calculateAwesomenessScore(user);
      Meteor.users.update(userId, {$set: {awesomeness: awesomeness}});
      return true;
    }
  });
});