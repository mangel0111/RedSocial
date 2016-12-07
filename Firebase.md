syncState(endpoint, options)

Purpose

Allows you to set up two way data binding between your component's state and your Firebase. Whenever your Firebase changes, your component's state will change. Whenever your component's state changes, Firebase will change.

Arguments

endpoint
type: string
The relative Firebase endpoint to which you'd like to bind your component's state
options
type: object
properties:
context: (object - required) The context of your component
state: (string - required) The state property you want to sync with Firebase
asArray: (boolean - optional) Returns the Firebase data at the specified endpoint as an Array instead of an Object
keepKeys: (boolean - optional) will keep any firebase generated keys intact when manipulating data using the asArray option.
queries: (object - optional) Queries to be used with your read operations. See Query Options for more details.
then: (function - optional) The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with syncState) to change this.state.loading to false.
onFailure: (function - optional) A callback function that will be invoked if the current user does not have read or write permissions at the location.
Return Value

An object which you can pass to removeBinding when your component unmounts to remove the Firebase listeners.

Example

componentDidMount(){
  base.syncState(`shoppingList`, {
    context: this,
    state: 'items',
    asArray: true
  });
}
addItem(newItem){
  this.setState({
    items: this.state.items.concat([newItem]) //updates Firebase and the local state
  });
}


bindToState(endpoint, options)

Purpose

One way data binding from Firebase to your component's state. Allows you to bind a component's state property to a Firebase endpoint so whenever that Firebase endpoint changes, your component's state will be updated with that change.

Arguments

endpoint
type: string
The relative Firebase endpoint that you'd like your component's state property to listen for changes
options
type: object
properties:
context: (object - required) The context of your component
state: (string - required) The state property you want to sync with Firebase
asArray: (boolean - optional) Returns the Firebase data at the specified endpoint as an Array instead of an Object
queries: (object - optional) Queries to be used with your read operations. See Query Options for more details.
then: (function - optional) The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with bindToState) to change this.state.loading to false.
onFailure: (function - optional) A callback function that will be invoked if the current user does not have read permissions at the location.
Return Value

An object which you can pass to removeBinding when your component unmounts to remove the Firebase listeners.

Example

componentDidMount(){
  base.bindToState('tasks', {
    context: this,
    state: 'tasks',
    asArray: true
  });
}


listenTo(endpoint, options)

Purpose

Allows you to listen to Firebase endpoints without binding those changes to a state property. Instead, a callback will be invoked with the newly updated data.

Arguments

endpoint
type: string
The relative Firebase endpoint which contains the data with which you'd like to invoke your callback function
options
type: object
properties:
context: (object - required) The context of your component
asArray: (boolean - optional) Returns the Firebase data at the specified endpoint as an Array instead of an Object
then: (function - required) The callback function that will be invoked with the data from the specified endpoint when the endpoint changes
onFailure: (function - optional) The callback function that will be invoked if the current user does not have read permissions at the location.
queries: (object - optional) Queries to be used with your read operations. See Query Options for more details.
Return Value

An object which you can pass to removeBinding when your component unmounts to remove the Firebase listeners.

Example

componentDidMount(){
  base.listenTo('votes', {
    context: this,
    asArray: true,
    then(votesData){
      var total = 0;
      votesData.forEach((vote, index) => {
        total += vote
      });
      this.setState({total});
    }
  })
}


fetch(endpoint, options)

Purpose

Allows you to retrieve the data from a Firebase endpoint just once without subscribing or listening for data changes.

Arguments

endpoint
type: string
The relative Firebase endpoint which contains the data you're wanting to fetch
options
type: object
properties:
context: (object - required) The context of your component
asArray: (boolean - optional) Returns the Firebase data at the specified endpoint as an Array instead of an Object
then: (function - required) The callback function that will be invoked with the data from the specified endpoint when the endpoint changes
onFailure: (function - optional) The callback function that will be invoked with an error that occurs reading data from the specified endpoint
queries: (object - optional) Queries to be used with your read operations. See Query Options for more details.
Return Value

A Firebase Promise which resolves when the write is complete and rejects if there is an error

Example

Using callback

getSales(){
  base.fetch('sales', {
    context: this,
    asArray: true,
    then(data){
      console.log(data);
    }
  });
}
Using Promise

getSales(){
  base.fetch('sales', {
    context: this,
    asArray: true
  }).then(data => {
    console.log(data);
  }).catch(error => {
    //handle error
  })
}


post(endpoint, options)

Purpose

Allows you to update a Firebase endpoint with new data. Replace all the data at this endpoint with the new data

Arguments

endpoint
type: string
The relative Firebase endpoint that you'd like to update with the new data
options
type: object
properties:
data: (any - required) The data you're wanting to persist to Firebase
then: (function - optional) A callback that will get invoked once the new data has been saved to Firebase. If there is an error, it will be the only argument to this function.
Return Value

A Firebase Promise which resolves when the write is complete and rejects if there is an error

Example

Using callback

addUser(){
  base.post(`users/${userId}`, {
    data: {name: 'Tyler McGinnis', age: 25},
    then(err){
      if(!err){
        Router.transitionTo('dashboard');
      }
    }
  });
}
Using promise

addUser(){
  base.post(`users/${userId}`, {
    data: {name: 'Tyler McGinnis', age: 25}
  }).then(() => {
    Router.transitionTo('dashboard');
  }).catch(err => {
    // handle error
  });
}


push(endpoint, options)

Purpose

Allows you to add data to a Firebase endpoint. Adds data to a child of the endpoint with a new Firebase push key

Arguments

endpoint
type: string
The relative Firebase endpoint that you'd like to push the new data to
options
type: object
properties:
data: (any - required) The data you're wanting to persist to Firebase
then: (function - optional) A callback that will get invoked once the new data has been saved to Firebase. If there is an error, it will be the only argument to this function.
Return Value

A Firebase ThenableReference which is defined by Firebase as a "Combined Promise and reference; resolves when write is complete, but can be used immediately as the reference to the child location."

Example

Using callback

//
addBear(){
  var immediatelyAvailableReference = base.push('bears', {
    data: {name: 'George', type: 'Grizzly'},
    then(err){
      if(!err){
        Router.transitionTo('dashboard');
      }
    }
  });
  //available immediately, you don't have to wait for the callback to be called
  var generatedKey = immediatelyAvailableReference.key;
}
Using Promise interface

//
addBear(){
  var immediatelyAvailableReference = base.push('bears', {
    data: {name: 'George', type: 'Grizzly'}
  }).then(newLocation => {
    var generatedKey = newLocation.key;
  }).catch(err => {
    //handle error
  });
  //available immediately, you don't have to wait for the Promise to resolve
  var generatedKey = immediatelyAvailableReference.key;
}


update(endpoint, options)

Purpose

Allows you to update data at a Firebase endpoint changing only the properties you pass to it. Warning: calling update with options.data being null will remove the all the data at that endpoint

Arguments

endpoint
type: string
The relative Firebase endpoint that you'd like to update
options
type: object
properties:
data: (any - required) The data you're wanting to persist to Firebase
then: (function - optional) A callback that will get invoked once the new data has been saved to Firebase. If there is an error, it will be the only argument to this function.
Return Value

A Firebase Promise which resolves when the write is complete and rejects if there is an error

Example

Using callback

  // bears endpoint currently holds the object { name: 'Bill', type: 'Grizzly' }
  base.update('bears', {
    data: {name: 'George'},
    then(err){
      if(!err){
        Router.transitionTo('dashboard');
        //bears endpint is now {name: 'George', type: 'Grizzly'}
      }
    }
  });
Using Promise

  // bears endpoint currently holds the object { name: 'Bill', type: 'Grizzly' }
  base.update('bears', {
    data: {name: 'George'}
  }).then(() => {
    Router.transitionTo('dashboard');
  }).catch(err => {
    //handle error
  });


remove(endpoint, callback)

Purpose

Allows you to delete all data at the endpoint location

Arguments

endpoint
type: string
The relative Firebase endpoint that you'd like to delete data from
callback
type: (function - optional)
A callback that will get invoked once the data is successfully removed Firebase. If there is an error, it will be the only argument to this function.
Return Value

A Firebase Promise which resolves when the deletion is complete and rejects if there is an error

Example

Using callback

  base.remove('bears', function(err){
    if(!err){
      Router.transitionTo('dashboard');
    }
  });
Using Promise

  base.remove('bears').then(() => {
    Router.transitionTo('dashboard');
  }).catch(error => {
    //handle error
  });


removeBinding(ref)

Purpose

Remove the listeners to Firebase when your component unmounts.

Arguments

ref
type: Object
The return value of syncState, bindToState, or listenTo
Return Value

No return value

Example

componentDidMount(){
  this.ref = base.syncState('users', {
    context: this,
    state: 'users'
  });
}
componentWillUnmount(){
  base.removeBinding(this.ref);
}


reset()

Purpose

Removes every Firebase listener and resets all private variables. Used for testing purposes.

Arguments

No Arguments

Return Value

No return value



Queries

Use the query option to utilize the Firebase Query API. For a list of available queries and how they work, see the Firebase docs.

Queries are accepted in the options object of each read method (syncState, bindToState, listenTo, and fetch). The object should have one or more keys of the type of query you wish to run, with the value being the value for the query. For example:

base.syncState('users', {
  context: this,
  state: 'users',
  asArray: true,
  queries: {
    orderByChild: 'iq',
    limitToLast: 3
  }
})
The binding above will sort the users endpoint by iq, retrieve the last three (or, three with highest iq), and bind it to the component's users state. NOTE: This query is happening within Firebase. The only data that will be retrieved are the three users with the highest iq.

Authentication

re-base exposes a few methods of the Firebase Auth service to help with user authentication.

authWithPassword(auth, authHandler)

Purpose

Authenticate a user by email and password.

the Email sign-in method needs to be enabled in your firebase console

Arguments

authentication object
type: Object
properties:
email (string - required)
password (string - required)
auth handler
type: function
arguments:
error (object or null)
user data (object)
Return Value

No return value

Example

var authHandler = function(error, user) {
  if(error) doSomethingWithError(error);
  doSomethingWithUser(user);
}

// Simple email/password authentication
base.authWithPassword({
  email    : 'bobtony@firebase.com',
  password : 'correcthorsebatterystaple'
}, authHandler);


authWithOAuthPopup(provider, handler, settings)

Purpose

Authenticate a user using an OAuth popup

the sign in provider you are using needs to be enabled in your firebase console

Arguments

provider
type: string
name of auth provider "facebook, twitter, github, google"
auth handler
type: function
arguments:
error (object or null)
user data (object)
settings (available settings vary per auth provider)
type: object (optional)
properties:
scope (array or string)
Return Value

No return value

Example

var authHandler = function(error, user) {
  if(error) doSomethingWithError(error);
  doSomethingWithUser(user);
}
//basic
base.authWithOAuthPopup('twitter', authHandler);

// with settings
base.authWithOAuthPopup('github', authHandler, {scope: ['repos']});


authWithOAuthRedirect(provider, handler, settings)

Purpose

Authenticate a user using an OAuth redirect

the sign in provider you are using needs to be enabled in your firebase console

Arguments

provider
type: string
name of auth provider "facebook, twitter, github, google"
auth handler
type: function
arguments:
error (object or null)
settings (available settings vary per auth provider)
type: object (optional)
properties:
scope (array or string)
Return Value

No return value

Example

var authHandler = function(error) {
  if(error) doSomethingWithError(error);
  // noop if redirect is successful
  return;
}
//basic
base.authWithOAuthRedirect('twitter', authHandler);

// with settings
base.authWithOAuthRedirect('github', authHandler, {scope: ['repos']});


authGetOAuthRedirectResult(handler)

Purpose

Completes the OAuth redirect flow initiated by authWithOAuthRedirect

Arguments

handler
type: function
arguments:
error (object or null)
user data (object)
Return Value

No return value

Example

var authHandler = function(error) {
  if(error) console.log(error);
  // noop if redirect is successful
  return;
}

var onRedirectBack = function(error, authData){
  if(error) console.log(error);
  if(authData.user){
    doSomethingWithAuthenticatedUser(authData.user);
  } else {
    //redirect to twitter for auth
    base.authWithOAuthRedirect('twitter', authHandler);
  }
}

base.authGetOAuthRedirectResult(onRedirectBack);



authWithOAuthToken(provider, token, handler, settings)

Purpose

Authenticate with OAuth provider using a token

Arguments

provider
type: string
name of auth provider "facebook, twitter, github, google"
token
type: string
handler
type: function
arguments:
error (object or null)
user data (object)
settings (available settings vary per auth provider)
type: object (optional)
properties:
scope (array or string)
providerOptions (object)
properties:
secret (twitter only - optional)
idToken(google only - optional, must be null if using accessToken)
accessToken(google only - optional)
Return Value

No return value

Example

var authHandler = function(error, user) {
  if(error) doSomethingWithError(error);
  doSomethingWithAuthenticatedUser(user);
}

// optional settings for auth provider
var settings = { scope: ['repos'] };

base.authWithOAuthToken('twitter', <yourtoken>, authHandler, settings);


authWithCustomToken(token,handler)

Purpose

Authenticate OAuth redirect flow initiated by authWithOAuthRedirect

Arguments

token
type: string
auth handler
type: function
arguments:
error (object or null)
user data (object)
Return Value

No return value

Example

var authHandler = function(error, user) {
  if(error) doSomethingWithError(error);
  doSomethingWithAuthenticatedUser(user);
}

base.authWithCustomToken(<yourtoken>, authHandler);



unauth()

Purpose

Signs out the currently logged in user

Arguments

none

Return Value

No return value

Example

base.unauth()


onAuth(handler)

Purpose

Listen to the authentication event

Arguments

handler
type: function
arguments:
user data (object or null) null if user is not logged in
Return Value

an unsubscribe function for the added listener

Example

function authDataCallback(user) {
  if (user) {
    console.log("User " + user.uid + " is logged in with " + user.providerId);
  } else {
    console.log("User is logged out");
  }
}

// Listen to authentication
var unsubscribe = base.onAuth(authDataCallback);

//to remove listener
unsubscribe();
User Management

re-base exposes a few helper methods for user methods for user management.

// Create
base.createUser({
  email: 'bobtony@firebase.com',
  password: 'correcthorsebatterystaple'
}, userHandler);


// Reset Password
base.resetPassword({
  email: 'bobtony@firebase.com'
}, errorHandler);
Firebase Services

re-base also exposes the firebase services directly if you need them.

Firebase App Docs

base.app

Firebase Database Docs

base.database

Firebase Storage Docs

base.storage

Firebase Auth Docs

base.auth

Firebase Messaging Docs

base.messaging

The initialized Firebase app for the re-base instance

base.initializedApp

Example

Using the default app

var base = Rebase.createClass(configObject);

var databaseService = base.database();
Using another 'named' app

var base = Rebase.createClass(configObject, 'myApp');

var databaseService = base.database(base.initializedApp);
