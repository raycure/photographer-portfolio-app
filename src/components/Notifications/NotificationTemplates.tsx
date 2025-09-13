import { NotificationTemplates } from './NotificationsTypes';

export const notificationTemplates: Record<
	NotificationTemplates,
	(extra?: any) => string
> = {
	LIKE_PICTURE: () => ` liked your picture.`,
	FOLLOW: () => ` started following you.`,
	CHALLENGE_PLACEMENT: (extra) => ` placed ${extra?.position} in a challenge.`,
	FOLLOWING_ATTENDED_CHALLENGE: () => ` attended a challenge.`,
	FOLLOWING_PLACED_TOP3: (extra) =>
		` placed in the top ${extra?.position ?? 3} of a challenge.`,
	NEW_CHALLENGE: () => `A new challenge has started.`,
};
