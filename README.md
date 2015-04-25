# ashleygwilliams.github.io
> hi, i'm ashley. nice to meet you.

This repo contains a static landing site for myself, *as well as* a 
[json-api](http://jsonapi.org) compliant, hypermedia API that would
generate the response you see on that page. The API is written in an
open source framework I work on, called 
[Endpoints](http://www.github.com/endpoints). 
This API is a work in progress :)

#### [Please fork this project and make your own portfolio with it! <3](https://github.com/ashleygwilliams/ashleygwilliams.github.io/new/master?readme=1#fork-destination-box)

## Up and Running

### Run the API
This API is built in the [Endpoints framework](http://www.github.com/endpoints/endpoints).
It uses a `sqlite3` database, and uses [`Knex`](http://knexjs.org/) for building queries and
[`Bookshelf`](http://bookshelfjs.org/) as an ORM.

1. Clone this repository
2. `npm install`
3. To build the database run `knex migrate:latest`
4. To seed the directory, run `knex seed:run`
5. Start the API by running `npm start`

The root route, [`/`](http://localhost:8080/) will show you a list of resources and the filters
you can use on them. 

Try: [`http://localhost:8080/users/1?include=projects,presentations,community,writing`](http://localhost:8080/users/1?include=projects,presentations,community,writing)

NOTE: You'll probably want an in browser JSON Viewer to see the responses :) I really
like: [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US)
for Chrome.

### Build the Static Site
The static site is built with [`jade`](http://www.jade-lang.com).
Simply edit `app/views/index.jade` and then run `npm build`.
To deploy to `gh-pages` move the generated `index.html` to the root directory.

`index.jade` extends `layout.jade`, which pulls in [`Skeleton CSS`](http://getskeleton.com/).
For custom styles, modify `public/css/styles.css`.
All other static assets should also be placed in `public`.
