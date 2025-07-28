import { create } from 'zustand';
import { ModalActions, ModalState } from './StoreTypes';

const initialState: ModalState = {
	visible: false,
	title: undefined,
	content: undefined,
	closeButtonActive: true,
	icon: undefined,
	buttons: { configuration: 'row', list: [] },
	list: undefined,
};

export const useModalStore = create<ModalState & ModalActions>((set) => ({
	...initialState,
	openModal: (props) =>
		set(() => ({
			...initialState,
			...props,
			visible: true,
		})),
	closeModal: () => set(() => ({ visible: false })),
	resetModal: () => set(() => initialState),
}));
