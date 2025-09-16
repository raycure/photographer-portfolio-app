import { useColors } from '@/src/hooks/useColors';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DropdownMenuProps } from './UITypes';
import { DropdownMenuStyles } from './UIStyles';
import CustomIcon from './CustomIcon';

export default function DropdownMenu<T>({
	backgroundColor,
	borderColor,
	setSelectedOption,
	selectedOption,
	list,
	getOptionValue,
	getOptionLabel,
}: DropdownMenuProps<T>) {
	const colors = useColors();
	const [listOpen, setListOpen] = useState(false);
	const styles = DropdownMenuStyles;
	return (
		<View style={styles.outerContainer}>
			<TouchableOpacity
				style={[
					styles.input,
					{ backgroundColor: backgroundColor || colors.primary400 },
				]}
				onPress={() => setListOpen(!listOpen)}
			>
				<Text style={[styles.inputText, { color: colors.tint }]}>
					{selectedOption || 'Account'}
				</Text>
				<CustomIcon
					size={24}
					collectionKey='oct'
					name={listOpen ? 'triangle-up' : 'triangle-down'}
				/>
			</TouchableOpacity>
			{listOpen && (
				<View style={styles.dropdown}>
					{list.map((item, index) => (
						<TouchableOpacity
							key={index}
							style={[
								styles.option,
								{
									backgroundColor: backgroundColor || colors.primary400,
									borderColor: borderColor || colors.primary500,
								},
							]}
							onPress={() => {
								setSelectedOption(getOptionValue(item));
								setListOpen(false);
							}}
						>
							<Text style={[styles.inputText, { color: colors.tint }]}>
								{getOptionLabel(item)}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			)}
		</View>
	);
}
