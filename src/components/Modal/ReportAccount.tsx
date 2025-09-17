import { UserID } from '@/src/stores/StoreTypes';
import { View } from 'react-native';
import DropdownMenu from '../UI/DropdownMenu';
import { useEffect, useState } from 'react';
import InputArea from '../UI/InputArea';
import { useColors } from '@/src/hooks/useColors';
import { useForm } from '@/src/hooks/useForm';
import { useModalStore } from '@/src/stores/ModalStore';
import CustomButton from '../UI/CustomButton';
import { ReportReason } from './ModalTypes';
import { reportReasons } from '@/src/constants/reportReasons';
import { ReportAccountStyles } from './ModalStyles';

export default function ReportAccount({ userId }: { userId: UserID }) {
	const [selectedOption, setSelectedOption] = useState<
		ReportReason | undefined
	>();
	const {
		formData: reportData,
		onInputChange,
		setFormData,
	} = useForm({
		userId: userId,
		id: '',
		issue: '',
	});
	useEffect(() => {
		if (selectedOption) {
			setFormData((prev) => ({ ...prev, id: selectedOption.id }));
		}
	}, [selectedOption]);

	const colors = useColors();
	const styles = ReportAccountStyles;
	return (
		<View>
			<DropdownMenu<ReportReason>
				list={reportReasons}
				selectedOption={selectedOption?.topic}
				setSelectedOption={setSelectedOption}
				getOptionValue={(item) => item}
				getOptionLabel={(item) => item.topic}
				title='Topic'
				width={260}
			/>
			<InputArea
				title='Tell us more'
				value={reportData.issue}
				placeholder='Tell us more...'
				onChangeText={(text) => onInputChange(text, 'issue')}
				multiline={true}
				numberOfLines={5}
				containerStyle={{ backgroundColor: colors.primary600 }}
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
					disabled={!selectedOption}
					onPress={() => {
						if (!reportData.id) return;
						console.log(reportData);
					}}
				/>
			</View>
		</View>
	);
}
