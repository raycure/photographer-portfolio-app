import { TextInput } from 'react-native';
import { Text, View } from '../Themed';
import { useState } from 'react';
import { InputAreaParentProps, InputAreaProps } from './UITypes';
import { useColors } from '@/src/hooks/useColors';
import { InputAreaStyles } from './UIStyles';
const styles = InputAreaStyles;
const ParentView = ({ children, title, style }: InputAreaParentProps) => {
	const colors = useColors();
	if (title) {
		return (
			<View style={[styles.outerContainer, style]}>
				<Text style={[styles.title, { color: colors.gray200 }]}>{title}</Text>
				{children}
			</View>
		);
	}
	return children;
};
export default function InputArea({
	inputType = 'string',
	secure = false,
	placeholder = '',
	leftElement,
	rightElement,
	title,
	containerStyle,
	textStyle,
	textContentType,
	onChange,
	letterCount,
	maxLength,
	validationRegex,
	fieldKey,
	ruleFollowed,
	setRuleFollowed,
	...props
}: InputAreaProps) {
	const [active, setActive] = useState<boolean>(false);
	const colors = useColors();
	return (
		<ParentView style={maxLength ? styles.parent : {}} title={title!}>
			{maxLength && (
				<Text
					style={[
						styles.letterCountText,
						letterCount == maxLength && { color: colors.accentRed },
					]}
				>
					{letterCount}/{maxLength}
				</Text>
			)}
			<View
				style={[
					{
						borderColor: (() => {
							if (!fieldKey) return colors.primary400; // default
							const valid = ruleFollowed?.[fieldKey];
							if (valid === null) return colors.primary400; // no input yet
							return valid ? colors.primary400 : colors.accentRed; // valid vs invalid
						})(),
					},
					styles.innerContainer,
					active && { borderColor: colors.gray200 },
					containerStyle,
				]}
			>
				{leftElement && (
					<View style={styles.leftElementWrapper}>
						{leftElement({
							color: active ? colors.tint : colors.primary300,
						})}
					</View>
				)}
				<TextInput
					placeholder={placeholder}
					keyboardType={inputType === 'number' ? 'numeric' : 'default'}
					secureTextEntry={secure}
					style={[{ color: colors.gray200 }, styles.inputArea, textStyle]}
					selectionColor={colors.tint}
					{...props}
					onChange={(e) => {
						const value = e.nativeEvent.text;
						if (validationRegex) {
							// regex validation
							const valid = validationRegex.test(value);
							if (validationRegex && fieldKey && setRuleFollowed) {
								const valid = validationRegex.test(value);
								setRuleFollowed((prev) => ({
									...prev,
									[fieldKey]: valid,
								}));
							}
						}
						onChange?.(e);
					}}
					contextMenuHidden={true}
					placeholderTextColor={colors.primary300}
					textContentType={textContentType}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
					maxLength={maxLength}
				/>
				{rightElement && (
					<View style={styles.rightElementWrapper}>
						{rightElement({
							color: active ? colors.tint : colors.gray500,
						})}
					</View>
				)}
			</View>
		</ParentView>
	);
}
