import { ReactNode } from 'react';
import { CustomButtonProps } from '../components/UI/UITypes';
import { Social } from '../constants/socialMediaList';
import { LanguageKeys } from '../constants/languages';

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
	extra?: ReactNode;
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
export type NotificationID = string;

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
};

type UserQuotas = {
	leftAdQuota: number;
	leftFreeImageQuota: number;
};

type UserSocial = {
	socialMedia: { social: Social; url: string; username: string }[];
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
	decreaseQuota: (type: keyof UserState['quotas']) => void;
	followUser: (id: UserID) => void;
	unfollowUser: (id: UserID) => void;
	changeTheme: () => void;
	setLanguage: (key: LanguageKeys) => void;
	addSocialAccount: (account: {
		social: Social;
		url: string;
		username: string;
	}) => void;
	deleteSocialAccount: (account: { social: Social }) => void;
};

type ModalKeys = 'challengeExplanation' | 'languages' | 'imageInfo';
type InteractionModalState<T = any> = {
	seen: boolean;
	open: boolean;
	props?: T;
};

type ChallengeInteractions = {
	challengeId?: string;
	challengeDates: { start?: string; end?: string };
	likedEntries: string[];
	dislikedEntries: string[];
};
export type InteractionState = {
	modalsInteracted: Record<ModalKeys, InteractionModalState>;
	challengeInteractions: ChallengeInteractions;
};
export type InteractionActions = {
	setModalSeen: (modal: ModalKeys) => void;
	setModalOpen: (modal: ModalKeys, open: boolean, props?: any) => void;
	addLike: (entryId: string) => void;
	addDislike: (entryId: string) => void;
};
