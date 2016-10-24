In order to create **Tunr** the app, the first thing we need to do is:

<code>npm init</code>

With this command, we will setup our package.json file with all the beginning information about our app.

The next step will be to install our dependencies into our package.json and setup our middleware.  We will be using:
<ul>
<li>ExpressJs -- to be our middleware for our nodeJS server.</li>
<li>Express-Handlebars -- to be our template engine to save time typing.</li>
<li>body-parser -- so that we can parse document body into request parameters and use in our models</li>
<li>Mongoose -- to be our adapter and talk to our Mongo DB server.</li>
</ul>

For more information on installing and setting up MongoDB, go to their <a href="https://docs.mongodb.com/manual/installation/">documentation</a>

These dependencies, along with a couple others that I won't get into, can be installed from the comand-line using:

<code>npm install --save express express-handlebars body-parser mongoose</code>

Once installed, we will setup our default folder structure and turn our servers on.

The basic architecture will be Model-View-Controller, so we'll need folders to separate our these concepts.
