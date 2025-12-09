import i18n from '@/src/i18n';
import { useModalStore } from '@/src/stores/ModalStore';
import LinkedAccountsBlock from './LinkedAccountsBlock';
import { useContext } from 'react';
import UserContext from '@/src/context/UserContext';
import LinkAccountBlock from './LinkAccountBlock';
import ReportAccount from './ReportAccount';
import ChangePasswordBlock from './ChangePasswordBlock';
import ReportIssueBlock from './ReportIssueBlock';

export const AddPremiumPicture = () => {
	const { openModal, closeModal } = useModalStore.getState();
	const t = i18n.t;
	openModal({
		title: t('Modals.AddPremiumPicture.title'),
		content: t('Modals.AddPremiumPicture.content'),
		buttons: {
			configuration: 'row',
			list: [
				{
					type: 'general',
					content: t('UI.Buttons.Purchase'),
					onPress: () => closeModal(),
				},
			],
		},
	});
};

export const ChallengeHistoryInfo = () => {
	const { openModal } = useModalStore.getState();
	const t = i18n.t;
	const list = t('Modals.ChallengeHistoryInfo.list', {
		returnObjects: true,
	}) as string[];
	openModal({
		title: t('Modals.ChallengeHistoryInfo.title'),
		content: t('Modals.ChallengeHistoryInfo.text'),
		list: [
			{ icon: '🥇', content: list[0] },
			{
				icon: '📈',
				content: list[1],
			},
			{
				icon: '🖼️',
				content: list[2],
			},
		],
		buttons: {
			configuration: 'row',
			list: [
				{
					type: 'general',
					content: t('UI.Buttons.Understood'),
					onPress: () => useModalStore.getState().closeModal(),
				},
			],
		},
	});
};

export const YouveSeenEverything = () => {
	const { openModal } = useModalStore.getState();
	const t = i18n.t;
	openModal({
		title: t('Modals.YouveSeenEverything.title'),
		content: t('Modals.YouveSeenEverything.text'),
		buttons: {
			configuration: 'row',
			list: [
				{
					type: 'general',
					content: t('UI.Buttons.Continue'),
					onPress: () => useModalStore.getState().closeModal(),
				},
			],
		},
	});
};

export const AssociatedAccounts = (userId: string) => {
	const { openModal } = useModalStore.getState();
	openModal({
		title: 'Associated Accounts',
		extra: <LinkedAccountsBlock userId={userId ?? ''} />,
	});
};

export const AddLinkedAccount = () => {
	const { openModal } = useModalStore.getState();
	const t = i18n.t;
	openModal({
		title: t('Modals.AddLinkedAccount.title'),
		content: t('Modals.AddLinkedAccount.text'),
		extra: <LinkAccountBlock />,
	});
};

export const ReportAccountModal = (userId: string) => {
	const { openModal } = useModalStore.getState();
	const t = i18n.t;
	openModal({
		title: t('Modals.ReportAccount.title'),
		extra: <ReportAccount userId={userId ?? ''} />,
	});
};

export const ChangePassword = () => {
	const { openModal } = useModalStore.getState();
	const t = i18n.t;
	openModal({
		title: t('Modals.ChangePassword.title'),
		extra: <ChangePasswordBlock />,
	});
};

export const ReportIssue = () => {
	const { openModal } = useModalStore.getState();
	const t = i18n.t;
	openModal({
		title: t('Modals.ReportIssue.title'),
		content: t('Modals.ReportIssue.text'),
		extra: <ReportIssueBlock />,
	});
};
