import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import { Text, View } from '../Themed';
import Colors from '@/src/constants/Colors';
import { useState } from 'react';
import { InputAreaProps } from './UITypes';

export default function InputArea({
	inputType = 'string',
	secure = false,
	placeholder = '',
	leftElement,
	rightElement,
	title = placeholder,
	containerStyle,
	textStyle,
	textContentType,
	onChange,
	...props
}: InputAreaProps) {
	const colorScheme = useColorScheme();
	const [active, setActive] = useState<boolean>(false);
	return (
		<View style={styles.outerContainer}>
			{title && (
				<Text
					style={{
						fontWeight: 'bold',
						color: Colors[colorScheme ?? 'dark'].tint,
						fontSize: 20,
					}}
				>
					{title}
				</Text>
			)}
			<View
				style={[
					{
						backgroundColor: Colors[colorScheme ?? 'dark'].primary800,
						borderColor: Colors[colorScheme ?? 'dark'].gray500,
					},
					styles.innerContainer,
					active && { borderColor: Colors[colorScheme ?? 'dark'].tint },
					containerStyle,
				]}
			>
				{leftElement && (
					<View style={{ backgroundColor: 'transparent', marginRight: 6 }}>
						{leftElement({
							color: active
								? Colors[colorScheme ?? 'dark'].tint
								: Colors[colorScheme ?? 'dark'].gray400,
						})}
					</View>
				)}
				<TextInput
					placeholder={placeholder}
					keyboardType={inputType === 'number' ? 'numeric' : 'default'}
					secureTextEntry={secure}
					style={[
						{ color: Colors[colorScheme ?? 'dark'].tint },
						styles.inputArea,
						textStyle,
					]}
					selectionColor={Colors[colorScheme ?? 'dark'].tint}
					{...props}
					onChange={onChange}
					contextMenuHidden={true}
					placeholderTextColor={Colors[colorScheme ?? 'dark'].gray400}
					textContentType={textContentType}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
				/>
				{rightElement && (
					<View
						style={{
							position: 'absolute',
							right: 12,
							backgroundColor: 'transparent',
						}}
					>
						{rightElement({
							color: active
								? Colors[colorScheme ?? 'dark'].tint
								: Colors[colorScheme ?? 'dark'].gray400,
						})}
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		flexDirection: 'column',
		marginBlock: 6,
		backgroundColor: 'transparent',
		width: '100%',
	},
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		overflow: 'hidden',
		marginBlock: 6,
		paddingInline: 14,
		paddingVertical: 6,
		borderWidth: 2,
		width: '100%',
	},
	inputArea: {
		flex: 1,
		paddingInline: 16,
		fontSize: 18,
	},
});
