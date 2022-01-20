import { createStore , applyMiddleware } from "redux";

import logger from 'redux-logger'

import rootRoducer from "./root-roducer";

const middelWares=[logger]

const Store = createStore(rootRoducer,applyMiddleware(...middelWares))

export default Store;