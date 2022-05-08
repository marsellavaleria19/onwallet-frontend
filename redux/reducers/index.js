import { combineReducers } from 'redux';
import registration from './registration';
import forgotPassword from './forgotPassword';
import auth from './auth';
import user from './user';
import transaction from './transaction';
import phone from './phone';
import changePassword from './changePassword';
import changePin from './changePin';
import history from './history';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const persistForAuth = {
   key: 'auth',
   storage: storage,
};

const persistForUser = {
   key: 'user',
   storage: storage,
};

const persistForHistory = {
   key: 'history',
   storage: storage,
};

const persistForPhone = {
   key: 'phone',
   storage: storage,
};

const rootReducer = combineReducers({
   registration,
   forgotPassword,
   auth:persistReducer(persistForAuth,auth),
   user:persistReducer(persistForUser,user),
   transaction,
   phone:persistReducer(persistForPhone,phone),
   changePassword,
   changePin,
   history:persistReducer(persistForHistory,history)
});

export default rootReducer;