import { makeAsyncActionTypes, makeActionCreator, makeAsyncActionCreator } from 'Utils/actionHelpers';

export const SIGNIN = makeAsyncActionTypes('SIGNIN');
export const SIGNOUT = makeAsyncActionTypes('SIGNOUT');
export const SIGNUP = makeAsyncActionTypes('SIGNUP');

export const AuthActionsCreator = {
	signin: makeAsyncActionCreator(SIGNIN),
signout: makeAsyncActionCreator(SIGNOUT),
sighup: makeAsyncActionCreator(SIGNUP),
}
