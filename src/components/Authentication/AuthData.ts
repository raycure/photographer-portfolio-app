import { AuthInputDataTypes } from './AuthTypes';

export const authFormInputData: AuthInputDataTypes = {
	name: {
		leftIcon: {
			collectionKey: 'fa6',
			name: 'user-large',
		},
		placeholder: 'Enter your name',
		title: 'Your name',
		textContentType: 'name',
	},
	username: {
		leftIcon: {
			collectionKey: 'fe',
			name: 'at-sign',
		},
		placeholder: 'Enter your username',
		title: 'Username',
		textContentType: 'nickname',
	},
	email: {
		leftIcon: {
			collectionKey: 'fa',
			name: 'envelope',
		},
		placeholder: 'Enter your email',
		title: 'Email',
		textContentType: 'emailAddress',
	},
	password: {
		leftIcon: {
			collectionKey: 'fa6',
			name: 'lock',
		},
		placeholder: 'Enter your password',
		title: 'Password',
		textContentType: 'password',
	},
};
