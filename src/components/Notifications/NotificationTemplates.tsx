import { useTranslation } from 'react-i18next';
import { NotificationTemplates } from './NotificationsTypes';

export const notificationTemplates: () => Record<
	NotificationTemplates,
	(extra?: any) => string
> = () => {
	const { i18n } = useTranslation();
	const lang = i18n.language;

	return {
		LIKE_PICTURE: () =>
			lang === 'tr' ? ' fotoğrafını beğendi.' : ' liked your picture.',
		FOLLOW: () =>
			lang === 'tr' ? ' seni takip etmeye başladı.' : ' started following you.',
		CHALLENGE_PLACEMENT: (extra) =>
			lang === 'tr'
				? ` bir yarışmada ${extra?.position}. oldu.`
				: ` placed ${extra?.position} in a challenge.`,
		FOLLOWING_ATTENDED_CHALLENGE: () =>
			lang === 'tr' ? ' bir yarışmaya katıldı.' : ' attended a challenge.',
		FOLLOWING_PLACED_TOP3: (extra) =>
			lang === 'tr'
				? ` bir yarışmada ilk ${extra?.position ?? 3} arasında yer aldı.`
				: ` placed in the top ${extra?.position ?? 3} of a challenge.`,
		NEW_CHALLENGE: () =>
			lang === 'tr'
				? 'Yeni bir yarışma başladı.'
				: 'A new challenge has started.',
	};
};
