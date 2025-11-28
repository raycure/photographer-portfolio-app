import { initReactI18next } from 'react-i18next';
import en from './en.json';
import tr from './tr.json';
import i18n from 'i18next';
import { useUserInfoStore } from '../stores/UserInfoStore';

const resources = {
	en: { translation: en },
	tr: { translation: tr },
};
const language = useUserInfoStore.getState().preferences.language;

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: 'tr',
	lng: language,
});

export default i18n;
