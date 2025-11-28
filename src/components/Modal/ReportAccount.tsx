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
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();
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
				list={reportReasons()}
				selectedOption={selectedOption?.topic}
				setSelectedOption={setSelectedOption}
				getOptionValue={(item) => item}
				getOptionLabel={(item) => item.topic}
				title={t('Modals.ReportAccount.Topics.title')}
				width={260}
			/>
			<InputArea
				title={t('Modals.ReportAccount.subtitle')}
				value={reportData.issue}
				placeholder={t('Modals.ReportAccount.placeholder')}
				onChangeText={(text) => onInputChange(text, 'issue')}
				multiline={true}
				numberOfLines={6}
				containerStyle={{ backgroundColor: colors.primary600 }}
				maxLength={250}
				letterCount={reportData.issue.length || 0}
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
