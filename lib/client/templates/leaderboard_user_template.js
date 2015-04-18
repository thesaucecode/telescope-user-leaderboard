Template[getTemplate('leaderboardUserItem')].helpers({
  createdAtFormatted: function() {
    return this.createdAt ? moment(this.createdAt).fromNow() : '–';
  },
  displayName: function() {
    return this.username;
  },
  posts: function() {
    return Posts.find({'userId':this._id});
  },
  comments: function() {
    return Comments.find({'userId':this._id});
  },
  getProfileUrl: function () {
    return getProfileUrl(this);
  },
  getKarma: function() {
    return Math.round(100*this.karma)/100;
  },
  getAwesomeness: function() {
    return Math.round(100*this.awesomeness)/100;
  },
  getInvitedUserProfileUrl: function () {
    var user = Meteor.users.findOne(this.invitedId);
    return getProfileUrl(user);
  }
});
