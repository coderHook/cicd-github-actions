# Github Actions
### cicd-github-actions

This repository is made to learn how  to create a CI/CD pipeline with Github Actions.

## Structure

    name: name of the workflow
    on: action that will trigger thisworkflow
    jobs: steps to be done

Flows:
    Get App
    Install
    Linter: Eslint
    Test: Jest (unit and integration)
    E2E test: Cypress
    Deployment: Heroku
    HelthCheck to --> "https://cicd-github-actions.herokuapp.com/health"
    Rollback in case of failure
    Versioning, default Patch.
    Pipeline Status notification to slack channel.

## Commands

Start by running `npm install` or `yarn` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build
`npm run cy:open`: "cypress open",
`npm run start:test`: "cross-env NODE_ENV=test node index.js",
`npm run test:e2e`: "cypress run"
