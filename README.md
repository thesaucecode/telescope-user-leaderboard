# telescope-user-leaderboard

## Overview

This is a package written for the telescope project. It provides a community with a user leaderboard, a new user activity metric recorded on the user record and a nav link to this leaderboard.

Implemented originally for [ProductHoist](https://producthoist.com.au)

## Implementation

Clone this repo to your `packages/` directory
On the command line, run `meteor add telescope-user-leaderboard` to activate the package for use on your telescope installation.

## Exposed methods

We already provide callbacks to recalculate a user's 'awesomeness' scoring after upvotes, comments, post submission and approval.  You can call this method 

#### `calculateAwesomenessScore(user)`

This method takes a user document and returns their new awesomeness score.

#### `user_rating_weightings`

This is an object that defines the weighting given to each action by a user.  Amend this in a `Meteor.startup` function to use a different weighting.

	user_rating_weightings = {	
	  	post: 5,
  		comment: 2,
  		upvote: 1,
  		karma: 1
	};
	
## Data migration

We have added a data migration inline with the current telescope migration mechanism to add an awesomeness score for each of your existing users.
