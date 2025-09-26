import { LanguageKeys } from '@/src/constants/languages';
import { UserID } from '@/src/stores/StoreTypes';

export type LinkedAccountsBlockProps = { userId: UserID };
export type ReportReason = {
	id: string;
	topic: string;
};

export type LanguagesModalItemProps = {
	onPress: () => void;
	language: LanguageKeys;
};
