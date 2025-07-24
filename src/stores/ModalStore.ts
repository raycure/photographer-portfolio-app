import { create } from 'zustand';
import { CustomButtonProps, CustomIconProps } from '../components/UI/UITypes';

type ModalListItem = {
	icon?: React.ReactNode;
	content: string;
};

export type ModalState = {
	visible?: boolean;
	title?: string;
	content?: string;
	closeButtonActive?: boolean;
	icon?: React.ReactNode;
	buttons?: { configuration?: 'row' | 'column'; list: CustomButtonProps[] };
	list?: ModalListItem[];
};

type ModalActions = {
	openModal: (props: Partial<ModalState>) => void;
	closeModal: () => void;
	resetModal: () => void;
};

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
