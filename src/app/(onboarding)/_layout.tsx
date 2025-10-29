import { Stack } from 'expo-router';

export default function StackLayout() {
	return (
		<Stack
			screenOptions={() => ({
				header: () => null,
			})}
		>
			<Stack.Screen
				name='index'
				options={{
					title: 'Onboarding',
				}}
			/>
		</Stack>
	);
}
