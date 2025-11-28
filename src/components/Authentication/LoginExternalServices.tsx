import LineSeperator from '../UI/LineSeperator';
import { Text, View } from '../Themed';
import CustomButton from '../UI/CustomButton';
import CustomIcon from '../UI/CustomIcon';
import { IconCollectionKey } from '@/src/constants/iconRegistry';
import { useColors } from '@/src/hooks/useColors';
import { LoginExternalServicesStyles } from './AuthStyles';
import { useTranslation } from 'react-i18next';

export default function LoginExternalServices() {
	const colors = useColors();
	const { t } = useTranslation();
	const styles = LoginExternalServicesStyles;
	const externalLoginServices: {
		name: string;
		icon: {
			collectionKey: IconCollectionKey;
			name: string;
		};
	}[] = [
		{
			name: 'google',
			icon: { collectionKey: 'fa', name: 'google' },
		},
		{
			name: 'apple',
			icon: { collectionKey: 'fa', name: 'apple' },
		},
	];
	const handleServicePick = (serviceName: string) => {};
	return (
		<View style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				<LineSeperator />
				<Text darkColor={colors.gray300} lightColor={colors.gray300}>
					{t('Authentication.Login.externalServices')}
				</Text>
				<LineSeperator />
			</View>
			<View style={styles.innerContainer}>
				{externalLoginServices.map((service, index) => (
					<CustomButton
						key={index}
						type='icon'
						onPress={() => handleServicePick(service.name)}
						icon={({ color }) => (
							<CustomIcon
								collectionKey={service.icon.collectionKey}
								name={service.icon.name}
								color={color}
								size={34}
							/>
						)}
					/>
				))}
			</View>
		</View>
	);
}
