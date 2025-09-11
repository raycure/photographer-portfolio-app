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

export type UserID = string;
export type ImageID = string;
export type ChallengeID = string;
export type EntryID = string;

type ChallengeInfo = {
	challengeId: ChallengeID;
	entryId?: EntryID;
	userId?: UserID;
	imageId?: ImageID;
	rank: number;
	likes: UserID[];
};
export type AttendedChallenges = ChallengeInfo & { saved: boolean };

type UserPreferences = {
	language?: string;
	darkTheme?: boolean;
};

type UserStats = {
	experiencePoints?: number;
	attendedChallenges?: AttendedChallenges[];
	favorites: ChallengeInfo[];
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

export type UserPersonalInfo = {
	id?: UserID;
	name?: string;
	username?: string;
	email?: string;
	imageId?: string;
	verified: boolean;
	premium: boolean;
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
	addFavorite: (challenge: ChallengeInfo) => void;
	removeFavorite: (challengeId: ChallengeID) => void;
	decreaseQuota: (type: keyof UserState['quotas']) => void;
	followUser: (id: UserID) => void;
	unfollowUser: (id: UserID) => void;
};

type ModalKeys = 'challengeExplanation';

type ChallengeInteractions = {
	challengeId?: string;
	challengeDates: { start?: string; end?: string };
	likedEntries: string[];
	dislikedEntries: string[];
};
export type InteractionState = {
	modalsInteracted: Record<ModalKeys, boolean>;
	challengeInteractions: ChallengeInteractions;
};
export type InteractionActions = {
	setModalSeen: (modal: ModalKeys) => void;
	addLike: (entryId: string) => void;
	addDislike: (entryId: string) => void;
};
