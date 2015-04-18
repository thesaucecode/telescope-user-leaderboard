
Meteor.startup(function () {
  allMigrations = Object.keys(migrationsList);
  _.each(allMigrations, function(migrationName){
    runMigration(migrationName);
  });
});


// wrapper function for all migrations
var runMigration = function (migrationName) {
  var migration = Migrations.findOne({name: migrationName});

  if (migration){
    if(typeof migration.finishedAt === 'undefined'){
      // if migration exists but hasn't finished, remove it and start fresh
      console.log('!!! Found incomplete migration "'+migrationName+'", removing and running again.');
      Migrations.remove({name: migrationName});
    }else{
      // do nothing
      // console.log('Migration "'+migrationName+'" already exists, doing nothing.')
      return;
    }
  }

  console.log("//----------------------------------------------------------------------//");
  console.log("//------------//    Starting "+migrationName+" Migration    //-----------//");
  console.log("//----------------------------------------------------------------------//");
  Migrations.insert({name: migrationName, startedAt: new Date(), completed: false});

  // execute migration function
  var itemsAffected = migrationsList[migrationName]() || 0;

  Migrations.update({name: migrationName}, {$set: {finishedAt: new Date(), completed: true, itemsAffected: itemsAffected}});
  console.log("//----------------------------------------------------------------------//");
  console.log("//------------//     Ending "+migrationName+" Migration     //-----------//");
  console.log("//----------------------------------------------------------------------//");
};

var migrationsList = {
  addAwesomenessToUser: function () {
    var i = 0;
    Meteor.users.find({awesomeness: {$exists : false}}).forEach(function (user) {
      i++;
      var awesomeness = calculateAwesomenessScore(user);
      Meteor.users.update(user._id, {$set: {awesomeness: awesomeness}});
      console.log("---------------------");
      console.log("User: " + user.username);
      console.log("Setting awesomeness to " + awesomeness);
    });
    return i;
  }
};
