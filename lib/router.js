Meteor.startup(function () {
  var selector = {};
  var options = {sort: {'awesomeness': -1, 'comments': -1, 'karma': -1}};

  Router.route('/leaderboard/:limit?', {
    name: 'leaderboard',
    template: getTemplate('leaderboard'),
    waitOn: function() {
      var limit = parseInt(this.params.limit) || 10;
      return coreSubscriptions.subscribe('leaderboardUsers', selector, options, limit);
    },
    data: function() {
      var limit = parseInt(this.params.limit) || 10,
          parameters = getUsersParameters(this.params.query.filterBy, this.params.query.sortBy, limit),
          filterBy = (typeof this.params.query.filterBy === 'string') ? this.params.query.filterBy : 'all',
          sortBy = (typeof this.params.query.sortBy === 'string') ? this.params.query.sortBy : 'createdAt';
      Session.set('usersLimit', limit);
      return {
        users: Meteor.users.find(selector, options),
        filterBy: filterBy,
        sortBy: sortBy
      };
    },
    fastRender: true
  });
});