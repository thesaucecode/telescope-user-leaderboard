addToUserSchema.push({
  propertyName: 'awesomeness',
  propertySchema: {
    type: Number,
    optional: true,
    autoform: {
      omit: true
    }
  }
});

user_rating_weightings = {
  post: 5,
  comment: 2,
  upvote: 1,
  karma: 1
};

calculateAwesomenessScore = function(user) {
  var score = 0,
      commentCount = Comments.find({'userId': user._id}).count(),
      upvoteCount = Posts.find({upvoters: {$exists: user._id}}).count(),
      postCount = Posts.find({'userId': user._id}).count();
  score += user_rating_weightings.post * postCount;
  score += user_rating_weightings.comment * commentCount;
  score += user_rating_weightings.upvote * upvoteCount;
  score += user_rating_weightings.karma * user.karma;
  return score;
};