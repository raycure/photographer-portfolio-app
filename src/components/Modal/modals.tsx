import i18n from '@/src/i18n';
import { useModalStore } from '@/src/stores/ModalStore';
import LinkedAccountsBlock from './LinkedAccountsBlock';
import LinkAccountBlock from './LinkAccountBlock';
import ReportAccount from './ReportAccount';
import ChangePasswordBlock from './ChangePasswordBlock';
import ReportIssueBlock from './ReportIssueBlock';
import { useInteractionStore } from '@/src/stores/InteractionStore';

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
	const { openModal, closeModal } = useModalStore.getState();
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
					onPress: () => closeModal(),
				},
			],
		},
	});
};

export const YouveSeenEverything = () => {
	const { openModal, closeModal } = useModalStore.getState();
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
					onPress: () => closeModal(),
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
export const AttendChallenge = (onConfirm: () => Promise<void> | void) => {
	const { openModal, closeModal } = useModalStore.getState();
	const t = i18n.t;
	const list = t('Modals.AttendChallenge.list', {
		returnObjects: true,
	}) as string[];
	openModal({
		title: t('Modals.AttendChallenge.title'),
		content: t('Modals.AttendChallenge.content'),
		list: [
			{ icon: '✨', content: list[0] },
			{ icon: '💎', content: list[1] },
			{ icon: '🏆', content: list[2] },
		],
		buttons: {
			configuration: 'row',
			list: [
				{
					type: 'general',
					content: t('UI.Buttons.Continue'),
					onPress: async () => {
						closeModal();
						await onConfirm();
					},
				},
			],
		},
	});
};

export const ChallengeExplanation = (
	onContinue: () => Promise<void> | void
) => {
	const { openModal, closeModal } = useModalStore.getState();
	const t = i18n.t;
	const list = t('Modals.ChallengeExplanation.list', {
		returnObjects: true,
	}) as string[];
	openModal({
		title: t('Modals.ChallengeExplanation.title'),
		content: t('Modals.ChallengeExplanation.content'),
		list: [
			{ icon: '🆓', content: list[0] },
			{ icon: '👀', content: list[1] },
			{ icon: '🏆', content: list[2] },
		],
		buttons: {
			configuration: 'row',
			list: [
				{
					type: 'general',
					content: t('UI.Buttons.Understood'),
					onPress: () => {
						closeModal();
						onContinue();
					},
				},
			],
		},
	});
};
