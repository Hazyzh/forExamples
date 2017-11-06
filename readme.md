### show the diff of the two way

- `npm install`
- `npm run dev`

This page was make up by two component (`home1`, `home2`).  And the two component have the same function.

There have a difference in [reducers](https://github.com/Hazyzh/forExamples/tree/master/src/reducers) .

In `homeReducer1` i have to make a variable for every action. And every action must have `_PENDING`、`_FULFILLED`、`_REJECTED` handler just for change state variable.

In `homeReducer2` i just create a small number of variables, because of the state i need will change automatically in uiState.

### doubt ？

is there has any other way to achieve this. now i had to clone the source code and change to `dispatch` the `STATEMACHINE` action.

The PR just want achieve that abover.
