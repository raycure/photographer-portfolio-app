import { useTranslation } from 'react-i18next';
import { ReportReason } from '../components/Modal/ModalTypes';

export const reportReasons: () => ReportReason[] = () => {
	const { t } = useTranslation();
	return [
		{ id: 'issue_1', topic: t('Modals.ReportAccount.Topics.issue_1') },
		{ id: 'issue_2', topic: t('Modals.ReportAccount.Topics.issue_2') },
		{ id: 'issue_3', topic: t('Modals.ReportAccount.Topics.issue_3') },
		{ id: 'issue_4', topic: t('Modals.ReportAccount.Topics.issue_4') },
		{ id: 'issue_5', topic: t('Modals.ReportAccount.Topics.issue_5') },
		{ id: 'issue_6', topic: t('Modals.ReportAccount.Topics.issue_6') },
		{ id: 'issue_7', topic: t('Modals.ReportAccount.Topics.issue_7') },
		{ id: 'issue_8', topic: t('Modals.ReportAccount.Topics.issue_8') },
	];
};
