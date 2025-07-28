import { CustomButtonProps } from '../components/UI/UITypes';

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

export type ModalActions = {
	openModal: (props: Partial<ModalState>) => void;
	closeModal: () => void;
	resetModal: () => void;
};
