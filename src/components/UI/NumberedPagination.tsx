import { Pressable, Text, View } from 'react-native';
import CustomIcon from './CustomIcon';
import { useColors } from '@/src/hooks/useColors';
import { NumberedPaginationProps } from './UITypes';
import { NumberedPaginationStyles } from './UIStyles';

export default function NumberedPaginationfunction({
	activeIndex,
	setPaginationNumber,
	length,
	color,
	activeColor,
	size = 'medium',
}: NumberedPaginationProps) {
	const paginationNumbers = [...Array(length + 1).keys()].slice(1);
	const colors = useColors();
	function prePage() {
		if (activeIndex !== 0) {
			setPaginationNumber(activeIndex - 1);
		}
	}

	function nextPage() {
		if (activeIndex + 1 !== length) {
			setPaginationNumber(activeIndex + 1);
		}
	}

	function changePageNumber(id: number) {
		setPaginationNumber(id - 1);
	}
	const textStyle = {
		color: color ?? colors.tint,
		fontSize: size === 'medium' ? 16 : size === 'big' ? 18 : 14,
	};
	const styles = NumberedPaginationStyles;
	return (
		<View style={styles.outerContainer}>
			<Pressable onPress={prePage}>
				<CustomIcon
					size={size === 'medium' ? 24 : size === 'big' ? 28 : 20}
					collectionKey='fa'
					name='angle-left'
					color={color as string}
				/>
			</Pressable>
			{paginationNumbers.map((number, index) => {
				if (
					length > 4 &&
					number !== activeIndex + 1 &&
					number != 1 &&
					number !== length
				) {
					return null;
				}
				return (
					<View key={index} style={styles.innerContainer}>
						{length > 4 &&
							number != 1 &&
							number !== length &&
							number - 1 !== 1 && <Text style={textStyle}>..</Text>}
						{length > 4 && number === length && activeIndex + 1 === length && (
							<Text style={textStyle}>..</Text>
						)}
						<Pressable
							style={styles.number}
							onPress={() => changePageNumber(number)}
						>
							<Text
								style={[
									textStyle,
									activeIndex + 1 === number && {
										color: activeColor ?? colors.accentGreen200,
									},
								]}
							>
								{number}
							</Text>
						</Pressable>
						{length > 4 && number === 1 && activeIndex + 1 === 1 && (
							<Text style={textStyle}>..</Text>
						)}
						{length > 4 &&
							number != 1 &&
							number !== length &&
							length - number !== 1 && <Text style={textStyle}>..</Text>}
					</View>
				);
			})}
			<Pressable onPress={nextPage}>
				<CustomIcon
					size={size === 'medium' ? 24 : size === 'big' ? 28 : 20}
					collectionKey='fa'
					name='angle-right'
					color={color as string}
				/>
			</Pressable>
		</View>
	);
}
