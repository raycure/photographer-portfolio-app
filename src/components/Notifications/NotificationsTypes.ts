export type NotificationTemplates =
	| 'LIKE_PICTURE'
	| 'FOLLOW'
	| 'CHALLENGE_PLACEMENT'
	| 'FOLLOWING_ATTENDED_CHALLENGE'
	| 'FOLLOWING_PLACED_TOP3'
	| 'NEW_CHALLENGE';

export type NotificationTypes = 'CUSTOM' | NotificationTemplates;
