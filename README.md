# Multi Path Story

The application allow users to create a journey of story that keeps on forever

## Design

There are four main sections in the application

1. Views handled by `pug.js` which is the view enginee

2. Routes using `express.js` to handle `HTTP` calls

3. Controllers to interact with store

4. Store since persistence storage are not used, an in-memory store is used for the sentencies, which is stored in `./store/sentenciesStore.js`.

## Routes

There are two main endpoints:

1. `/:id/sentence-position` for posting and updating current and return a link for user to click on

2. `/story-update/:id/story-position/:sentenceId` for when user click on the link and update the starting point of the story and it depends on the sentence position

## Templating

The application is created using express and `pug.js` as templating it allows easier to create DOM elements for the views and keeping a consistent layout and also avoid a lot of DOM manipulation

## Testing

### Controllers

The unit tests covering the controllers are to make sure we are having the correct operation into the store

The tests covered the get and set operation into the store and updating of storys

### Routes

The unit tests covering the routes are to make sure that the response to the client is as expected when being called and if the `HTML` view enginee is containing the cruical information i.e the correct sentencies, also the correct response code.
