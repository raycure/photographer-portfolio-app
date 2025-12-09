import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { NotificationActions, NotificationState } from './StoreTypes';

const initialState: NotificationState = {
	notifications: [
		{
			notificationId: 'not_001',
			type: 'FOLLOW',
			userId: 'user_001',
			date: '2025-06-01',
			seen: false,
		},
		{
			notificationId: 'not_002',
			type: 'CHALLENGE_PLACEMENT',
			userId: 'user_002',
			date: '2025-06-03',
			extra: { position: '1st' },
			seen: false,
			navigate: {
				path: '/(stack)/connections',
				params: { userId: 'user_006' },
			},
		},
		{
			notificationId: 'not_003',
			type: 'LIKE_PICTURE',
			userId: 'user_003',
			date: '2025-07-05',
			seen: false,
		},
		{
			notificationId: 'not_004',
			type: 'FOLLOWING_ATTENDED_CHALLENGE',
			userId: 'user_002',
			date: '2025-08-07',
			seen: true,
		},
		{
			notificationId: 'not_005',
			type: 'FOLLOWING_PLACED_TOP3',
			userId: 'user_004',
			date: '2025-09-09',
			extra: { position: 3 },
			seen: true,
		},
		{
			notificationId: 'not_006',
			type: 'NEW_CHALLENGE',
			date: '2025-09-11',
			seen: true,
		},
	],
};
export const useNotificationStore = create<
	NotificationState & NotificationActions
>()(
	//persist(
	(set, get) => ({
		...initialState,
		setNotifSeen: (notificationId) =>
			set((state) => ({
				notifications: state.notifications.map((notif) =>
					notif.notificationId === notificationId
						? { ...notif, seen: true }
						: notif
				),
			})),
		addNotification: (notification) =>
			set((state) => ({
				notifications: [notification, ...state.notifications],
			})),
		setAllSeen: () =>
			set((state) => ({
				notifications: state.notifications.map((notif) => {
					return { ...notif, seen: true };
				}),
			})),
		hasUnread: () => get().notifications.some((n) => !n.seen),
		resetStore: () => set(() => initialState),
	})
	// 	{
	// 		name: 'notification-storage',
	// 		storage: createJSONStorage(() => AsyncStorage),
	// 	}
	// )
);
