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
type ChallengeID = string;

type UserPreferences = {
	language?: string;
};

type UserStats = {
	experiencePoints?: number;
	attendedChallenges?: ChallengeID[];
	wins?: ChallengeID[];
	favorites: ImageID[];
};

type UserQuotas = {
	leftAdQuota: number;
	leftFreeImageQuota: number;
};

type UserSocial = {
	socialMedia: { type: string; url: string }[];
	followingAccounts: UserID[];
	followerAccounts: UserID[];
};

type UserPersonalInfo = {
	id?: UserID;
	name?: string;
	username?: string;
	email?: string;
	verified?: boolean;
	premium?: boolean;
};

type UserAuth = {
	authToken?: string;
	refreshToken?: string;
};

export type UserState = {
	personalInfo: UserPersonalInfo;
	quotas: UserQuotas;
	social: UserSocial;
	preferences: UserPreferences;
	stats: UserStats;
	auth: UserAuth;
};

export type UserActions = {
	setUserData: (data: UserState) => void;
	updateUserData: (data: Partial<UserState>) => void;
	resetUserData: () => void;
	setPersonalInfo: (info: Partial<UserState['personalInfo']>) => void;
	setTokens: (auth: { authToken: string; refreshToken: string }) => void;
	logout: () => void;
	addFavorite: (id: string) => void;
	removeFavorite: (id: string) => void;
	decreaseQuota: (type: keyof UserState['quotas']) => void;
};
