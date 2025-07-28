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

type UserID = string;
type ImageID = string;

interface UserPreferences {
	language?: string;
}

interface UserStats {
	experiencePoints?: number;
	attendedChallenges?: number;
	wins?: number;
	favorites: ImageID[];
}

interface UserQuotas {
	leftAdQuota: number;
	leftFreeImageQuota: number;
}

interface UserSocial {
	socialMedia: string[];
	followingAccounts: UserID[];
	followerAccounts: UserID[];
}

interface UserPersonalInfo {
	id?: UserID;
	name?: string;
	username?: string;
	email?: string;
	verified: boolean;
	premium: boolean;
}

interface UserAuth {
	authToken?: string;
	refreshToken?: string;
	tokenExpiry?: number;
}

export interface UserState {
	personalInfo: UserPersonalInfo;
	quotas: UserQuotas;
	social: UserSocial;
	preferences: UserPreferences;
	stats: UserStats;
	auth: UserAuth;
}
