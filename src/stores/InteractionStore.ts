import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { InteractionActions, InteractionState } from './StoreTypes';

const initialState: InteractionState = {
	modalsInteracted: { challengeExplanation: false },
	challengeInteractions: {
		challengeId: undefined,
		challengeDates: { start: undefined, end: undefined },
		likedEntries: [],
		dislikedEntries: [],
	},
};
export const useInteractionStore = create<
	InteractionState & InteractionActions
>()(
	persist(
		(set) => ({
			...initialState,
			setModalSeen: (modal) =>
				set((state) => ({
					modalsInteracted: {
						...state.modalsInteracted,
						[modal]: true,
					},
				})),
			addLike: (entryId) =>
				set((state) => ({
					challengeInteractions: {
						...state.challengeInteractions,
						likedEntries: Array.from(
							new Set([...state.challengeInteractions.likedEntries, entryId])
						),
						dislikedEntries: state.challengeInteractions.dislikedEntries.filter(
							(id) => id !== entryId
						),
					},
				})),

			addDislike: (entryId) =>
				set((state) => ({
					challengeInteractions: {
						...state.challengeInteractions,
						dislikedEntries: Array.from(
							new Set([...state.challengeInteractions.dislikedEntries, entryId])
						),
						likedEntries: state.challengeInteractions.likedEntries.filter(
							(id) => id !== entryId
						),
					},
				})),
		}),
		{
			name: 'storage',
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);
