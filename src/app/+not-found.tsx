import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import { useTranslation } from 'react-i18next';

export default function NotFoundScreen() {
	const { t } = useTranslation();
	return (
		<>
			<Stack.Screen options={{ title: '' }} />
			<View style={styles.container}>
				<Text style={styles.title}>{t('NotFound.title')}</Text>

				<Link href='/(tabs)' style={styles.link}>
					<Text style={styles.linkText}>{t('NotFound.link')}</Text>
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
