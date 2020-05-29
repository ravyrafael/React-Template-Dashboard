import {combineReducers} from 'redux'

import cidades from './ducks/cidades.js'

const rootReducer = combineReducers({
    dashboard: ()=> ({}),
    cidades
})

export default rootReducer;