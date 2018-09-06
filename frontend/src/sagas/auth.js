import { takeEvery,take, put, call, select, all, fork } from 'redux-saga/effects';
import history from '../history';
import * as auth from 'Actions/auth';


export function* signin() {
	while(true) {
		yield take(auth.SIGNIN.INDEX);
		console.log('dddd');
	}
	
}

export default function* root() {
	yield fork(signin);
}




