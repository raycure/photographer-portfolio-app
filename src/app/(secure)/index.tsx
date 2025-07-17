import { Pressable, StyleSheet, TextInputProps } from 'react-native';
import { View } from '@/src/components/Themed';
import InputArea from '@/src/components/UI/InputArea';
import InputHighlightBar from '@/src/components/UI/InputHighlightBar';
import CustomIcon from '@/src/components/UI/CustomIcon';
import { useState } from 'react';
import { useForm } from '@/src/hooks/useForm';
import { IconCollectionKey } from '@/src/constants/iconRegistry';

type inputDataTypes = {
	value: string;
	leftIcon: {
		collectionKey: IconCollectionKey;
		name: string;
	};
	placeholder: string;
	name: 'name' | 'username' | 'password' | 'email';
	title: string;
	textContentType?: TextInputProps['textContentType'];
};

export default function LoginScreen() {
	const [passwordSecure, setPasswordSecure] = useState<boolean>(true);
	const { formData, onInputChange } = useForm({
		name: '',
		username: '',
		email: '',
		password: '',
	});

	const inputData: inputDataTypes[] = [
		{
			value: formData.name,
			name: 'name',
			leftIcon: {
				collectionKey: 'fa6',
				name: 'user-large',
			},
			placeholder: 'Enter your name',
			title: 'Your name',
			textContentType: 'name',
		},
		{
			value: formData.username,
			name: 'username',
			leftIcon: {
				collectionKey: 'fa6',
				name: 'user-group',
			},
			placeholder: 'Enter your username',
			title: 'Username',
			textContentType: 'nickname',
		},
		{
			value: formData.email,
			name: 'email',
			leftIcon: {
				collectionKey: 'fa',
				name: 'envelope',
			},
			placeholder: 'Enter your email',
			title: 'Email',
			textContentType: 'emailAddress',
		},
	];

	return (
		<View style={styles.container}>
			{inputData.map((data, index) => (
				<InputArea
					key={index}
					title={data.title}
					value={data.value}
					placeholder={data.placeholder}
					textContentType={data.textContentType}
					onChangeText={(text) => onInputChange(text, data.name)}
					leftElement={({ color }) => (
						<CustomIcon
							collectionKey={data.leftIcon.collectionKey}
							name={data.leftIcon.name}
							color={color}
						/>
					)}
				/>
			))}
			<InputArea
				leftElement={({ color }) => (
					<CustomIcon collectionKey='fa6' name='lock' color={color} />
				)}
				rightElement={({ color }) => (
					<Pressable onPress={() => setPasswordSecure(!passwordSecure)}>
						<CustomIcon
							collectionKey='ad'
							name={passwordSecure ? 'eyeo' : 'eye'}
							color={color}
						/>
					</Pressable>
				)}
				secureTextEntry={passwordSecure}
				containerStyle={{ overflow: 'visible' }}
				textStyle={{
					letterSpacing: passwordSecure && formData.password.length > 0 ? 4 : 0,
				}}
				title='Password'
				placeholder='Enter your password'
				value={formData.password}
				onChangeText={(text) => onInputChange(text, 'password')}
			/>
			<InputHighlightBar level='medium' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 18,
	},
});
