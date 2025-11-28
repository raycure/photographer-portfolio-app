import { useTranslation } from 'react-i18next';
import { AuthInputDataTypes } from './AuthTypes';
export const useAuthFormInputData = (): AuthInputDataTypes => {
	const { t } = useTranslation();
	const placeholders = t('Authentication.FormInputData.placeholders', {
		returnObjects: true,
	}) as string[];
	const titles = t('Authentication.FormInputData.titles', {
		returnObjects: true,
	}) as string[];
	return {
		name: {
			leftIcon: {
				collectionKey: 'fa6',
				name: 'user-large',
			},
			placeholder: placeholders[0],
			title: titles[0],
			textContentType: 'name',
			validationRegex: /^[A-Za-z\s]{3,28}$/,
		},
		username: {
			leftIcon: {
				collectionKey: 'fe',
				name: 'at-sign',
			},
			placeholder: placeholders[1],
			title: titles[1],
			textContentType: 'nickname',
			validationRegex: /^[A-Za-z0-9_]{1,16}$/,
		},
		email: {
			leftIcon: {
				collectionKey: 'fa',
				name: 'envelope',
			},
			placeholder: placeholders[2],
			title: titles[2],
			textContentType: 'emailAddress',
			validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		},
		password: {
			leftIcon: {
				collectionKey: 'fa6',
				name: 'lock',
			},
			placeholder: placeholders[3],
			title: titles[3],
			textContentType: 'password',
			validationRegex: /^.{6,}$/,
			secMedRegex: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
			secHighRegex:
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
		},
	};
};
