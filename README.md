# GitHub PR Helper

A Chrome Extension to make the Pull Request view on GitHub nicer
(no unicorns were harmed to make this extension)

Features include:
- Display labels on PR list pages
- Display labels on PR detail pages
- Manage PR labels on PR detail pages
- Milestones shown on PR list pages

## Install
For the time being, the extension is not available in the Chrome store, so instead install it
manually:

```
git clone https://github.com/petebacondarwin/github-pr-helper.git
```

Now open up the Chrome Extensions page:

```
chrome://extensions
```

Make sure the "Developer Mode" checkbox is ticked.

Now click the "Load unpacked extension..." button and browse to the folder where you cloned this
repository.

Make sure that the extension is enabled and then browse to your favourite Pull Request list, say
https://github.com/angular/angular.js/pulls

## Github API request limiting
The extension makes calls to https://api.github.com.  This has a limit of 60 requests per hour for
unauthenticated clients.  To get around this the extension will check for a GitHub `client_id` and
`client_secret` in your localStorage.  If this is there then it will authenticate its requests with
this information.

To create your own credentials, you need to register an application with GitHub.
* login to github
* go to the Register New Application page: https://github.com/settings/applications/new
* enter a name, url and callback url.

Add your `client_id` and `client_secret` to your localStorage by navigating to a github page,
opening the developer console, and entering the following, replacing the .... with your own
credentials:

```
localStorage.setItem('github.client_id', "....");
localStorage.setItem('github.client_secret', "....");
```

## Testing
The tests are stored in the `/tests` folder and are written in Jasmine, using the ngMocks extensions
to AngularJS.  You run the tests using the [Karma Test Runner](http://karma-runner.github.io/0.10/).

### Install Karma
This project uses karma 0.10.x release. Get the karma utility from npm:

```
npm install -g karma@0.10.x
```
### Run the tests
The configuration is in the `karma.conf.js` file.  Run the tests with the karma utility:

```
karma start
```

This should open up a browser and then run the tests.
