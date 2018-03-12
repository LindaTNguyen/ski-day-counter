import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
//import { goal, skiDay, allSkiDays, errors } from './store/reducers'
//import { allSkiDays, goal } from  './initialState.json'

/*
console.log (`
     The goal is ${goal} days
     Initially there are ${allSkiDays.length} ski days in state

     Constants - Actions:
     ${Object.keys(C).join('\n    ')}
`)
*/

/*

const state = 10

const action = {
    type: C.SET_GOAL,
    payload: 15
}

const nextState = goal(state, action)

console.log(`
     initial goal: ${state}
     action: ${JSON.stringify(action)}
     new_goal: ${nextState}
`);
*/


/*
const state = null

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    }
}

const nextState = skiDay(state, action)

console.log(`
     initial state: ${state}
     action: ${JSON.stringify(action)}
     new state: ${JSON.stringify(nextState)}
`);*/

/*

const state = [
    "user not authorized",
    "server feed not found"
]

const action = {
    type: C.ADD_ERROR,
    payload: "cannot connect to server"
}

const nextState = errors(state, action)

console.log(`
     initial state: ${state}
     action: ${JSON.stringify(action)}
     new state: ${JSON.stringify(nextState)}
`);
*/

/*

const state = [
    "user not authorized",
    "server feed not found"
]

const action = {
    type: C.CLEAR_ERROR,
    payload: 0 /!** REMOVES THE FIRST ITEM OF THE ARRAY AT INDEX O **!/
}

const nextState = errors(state, action)

console.log(`
     initial state: ${state}
     action: ${JSON.stringify(action)}
     new state: ${JSON.stringify(nextState)}
`);
*/

/*
const state = [
    {
        "resort": "Kirkwood",
        "date": "2016-12-15",
        "powder": true,
        "backcountry": false
    }
]

const action = {
    type: C.ADD_DAY,
    payload:     {
        "resort": "BOREAL",
        "date": "2016-12-15",
        "powder": false,
        "backcountry": true
    }
}

const nextState = allSkiDays(state, action)

console.log(`
     initial state: ${JSON.stringify(state)}
     action: ${JSON.stringify(action)}
     new state: ${JSON.stringify(nextState)}
`);
*/

/*const state = [
    {
        "resort": "Kirkwood",
        "date": "2016-12-15",
        "powder": true,
        "backcountry": false
    }, {
        "resort": "BOREAL",
        "date": "2016-12-16",
        "powder": false,
        "backcountry": true
    }
]

const action = {
    type: C.REMOVE_DAY,
    payload: "2016-12-15"
}

const nextState = allSkiDays(state, action)

console.log(`
     initial state: ${JSON.stringify(state)}
     action: ${JSON.stringify(action)}
     new state: ${JSON.stringify(nextState)}
`);*/

let state = initialState

console.log(`
     Initial State
     ===============
     goal: ${state.goal}
     resorts: ${JSON.stringify(state.resortNames)}
     fetching: ${state.resortNames.fetching}
     suggestions: ${state.resortNames.suggestions}
`);



state = appReducer(state, {
        type: C.SET_GOAL,
        payload: 15
})

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    }
})
//state = appReducer(state, C.FETCH_RESORT_NAMES)

//state = appReducer(state, action)

console.log(`
     Next State
     ===============
     goal: ${state.goal}
     resorts: ${JSON.stringify(state.resortNames)}
     fetching: ${state.resortNames.fetching}
     suggestions: ${state.resortNames.suggestions}
`);