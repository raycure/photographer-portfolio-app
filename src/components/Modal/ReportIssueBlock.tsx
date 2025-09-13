import { View } from 'react-native';
import InputArea from '../UI/InputArea';
import CustomIcon from '../UI/CustomIcon';
import { useState } from 'react';
type Issue = {
	title?: string;
	content?: string;
};
export default function ReportIssueBlock() {
	const [issue, setIssue] = useState<Issue>({
		title: undefined,
		content: undefined,
	});
	return (
		<View>
			<InputArea
				title='Topic'
				value={issue.title}
				placeholder='Topic of your issue'
				onChangeText={(text) => setIssue((prev) => ({ ...prev, title: text }))}
			/>
			<InputArea
				title='Issue'
				value={issue.content}
				placeholder='The issue you are facing'
				onChangeText={(text) =>
					setIssue((prev) => ({ ...prev, content: text }))
				}
				multiline={true}
				numberOfLines={5}
			/>
		</View>
	);
}
