import { createStore , applyMiddleware } from "redux";
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'

import rootRoducer from "./root-roducer";

const middelWares=[logger]

export const Store = createStore(rootRoducer,applyMiddleware(...middelWares))
export const Persistor = persistStore(Store) 

//export default {Store,Persistor}