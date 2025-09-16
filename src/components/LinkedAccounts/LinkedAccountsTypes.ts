import { Social } from '@/src/constants/socialMediaList';

export type LinkedAccountListItemProps = {
	data: {
		url: string;
		isPersonal: boolean;
		social: Social;
		username: string;
	};
};
