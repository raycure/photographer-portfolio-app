import { View } from 'react-native';
import InputArea from '../UI/InputArea';
import { useState } from 'react';
import { useColors } from '@/src/hooks/useColors';
import { ReportIssueModalStyles } from './ModalStyles';
import CustomButton from '../UI/CustomButton';
import { useModalStore } from '@/src/stores/ModalStore';
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
	const styles = ReportIssueModalStyles;
	return (
		<View>
			<InputArea
				title='Topic'
				value={issue.title}
				placeholder='Topic of your issue'
				onChangeText={(text) => setIssue((prev) => ({ ...prev, title: text }))}
				containerStyle={{ backgroundColor: color.primary600 }}
			/>
			<InputArea
				title='Issue'
				value={issue.content}
				placeholder='The issue you are facing'
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
					content='Cancel'
					onPress={() => useModalStore.getState().closeModal()}
				/>
				<CustomButton
					type='stretched'
					content='Report'
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
