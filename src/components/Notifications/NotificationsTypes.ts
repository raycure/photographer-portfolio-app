import { UserID } from '@/src/stores/StoreTypes';

export type NotificationTemplates =
	| 'LIKE_PICTURE'
	| 'FOLLOW'
	| 'CHALLENGE_PLACEMENT'
	| 'FOLLOWING_ATTENDED_CHALLENGE'
	| 'FOLLOWING_PLACED_TOP3'
	| 'NEW_CHALLENGE';

export type NotificationTypes = 'CUSTOM' | NotificationTemplates;

export type NotificationItemProps = {
	type: NotificationTypes;
	content?: string;
	userId?: UserID;
	date: Date | string | number;
	extra?: any;
	seen: boolean;
};
