import { useEffect, useState } from 'react';
import { Image } from 'react-native';

export default function getAspectRatio(imageLink?: string) {
	const [aspectRatio, setAspectRatio] = useState<number>(1);
	useEffect(() => {
		if (imageLink) {
			Image.getSize(imageLink, (w, h) => {
				setAspectRatio(w / h);
			});
		}
	}, [imageLink]);
	return aspectRatio;
}
