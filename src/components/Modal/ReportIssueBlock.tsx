import { View } from 'react-native';
import InputArea from '../UI/InputArea';
import { useState } from 'react';
import { useColors } from '@/src/hooks/useColors';
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
				numberOfLines={5}
				containerStyle={{ backgroundColor: color.primary600 }}
			/>
		</View>
	);
}
