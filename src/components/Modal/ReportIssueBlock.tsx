import { View } from 'react-native';
import InputArea from '../UI/InputArea';
import { useState } from 'react';
import { useColors } from '@/src/hooks/useColors';
import { ReportIssueModalStyles } from './ModalStyles';
import CustomButton from '../UI/CustomButton';
import { useModalStore } from '@/src/stores/ModalStore';
import { useTranslation } from 'react-i18next';
type Issue = {
	title?: string;
	content?: string;
};
export default function ReportIssueBlock() {
	const [issue, setIssue] = useState<Issue>({
		title: undefined,
		content: undefined,
	});
	const color = useColors();
	const { t } = useTranslation();
	const styles = ReportIssueModalStyles;
	return (
		<View>
			<InputArea
				title={t('Modals.ReportIssue.subtitleOne')}
				value={issue.title}
				placeholder={t('Modals.ReportIssue.placeholderOne')}
				onChangeText={(text) => setIssue((prev) => ({ ...prev, title: text }))}
				containerStyle={{ backgroundColor: color.primary600 }}
			/>
			<InputArea
				title={t('Modals.ReportIssue.subtitleTwo')}
				value={issue.content}
				placeholder={t('Modals.ReportIssue.placeholderTwo')}
				onChangeText={(text) =>
					setIssue((prev) => ({ ...prev, content: text }))
				}
				multiline={true}
				numberOfLines={6}
				containerStyle={{ backgroundColor: color.primary600 }}
				maxLength={250}
				letterCount={issue.content?.length || 0}
			/>
			<View style={styles.buttonContainer}>
				<CustomButton
					type='stretched'
					content={t('UI.Buttons.Cancel')}
					onPress={() => useModalStore.getState().closeModal()}
				/>
				<CustomButton
					type='stretched'
					content={t('UI.Buttons.Report')}
					disabled={!issue.content}
					onPress={() => {
						if (!issue) return;
						console.log(issue);
					}}
				/>
			</View>
		</View>
	);
}
