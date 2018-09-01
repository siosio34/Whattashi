import { folk, all } from 'redux-saga/effects';
import authSaga from './auth';

export default function* root() {
	yield [
		fork(auth),
	];
}