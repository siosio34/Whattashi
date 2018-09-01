const initialState = {
	isLodaing: false,
};

const auth = (state = initialState, action) => {
	switch(action.type) {
		case 'SIGNIN':
			return state;
		
		default:
			return state;
	}
};

export default auth;