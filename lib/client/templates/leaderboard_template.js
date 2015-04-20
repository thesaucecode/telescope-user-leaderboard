Template[getTemplate('leaderboard')].helpers({
  'communityName': function() {
    return getSetting('title');
  },
  leaderboard_table: function() {
    return getTemplate('leaderboardTable');
  }
});

Template[getTemplate('leaderboardTable')].helpers({
  user_item: function () {
    return getTemplate('leaderboardUserItem');
  },
  loadMoreUrl: function(){
    var count = parseInt(Session.get('usersLimit')) + 20;
    return '/leaderboard/' + count;
  },
  allUsersLoaded: function () {
    return false;
  }
});

Template[getTemplate('leaderboard')].rendered = function() {
};