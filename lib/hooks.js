primaryNav.push(
  {
    template: 'leaderboardButton',
    order: 5
  }
);

commentAfterSubmitMethodCallbacks.push(function(comment) {
  Meteor.call('updateAwesomenessScore', comment.userId, function(error, result) {
    if (error) {
      console.log(result);
    } else {
    }
  });
  return comment;
});

upvoteCallbacks.push(function(collection, post, upvoter) {
  Meteor.call('updateAwesomenessScore', upvoter._id, function(error, result) {
    if (error) {
      console.log(result);
    }
  });
  return post;
});

postSubmitMethodCallbacks.push(function(post) {
  Meteor.call('updateAwesomenessScore', post.userId, function(error, result) {
    if (error) {
      console.log(result);
    }
  });
  return post;
});