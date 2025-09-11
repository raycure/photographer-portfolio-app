import { useState, useEffect } from 'react';
import { Image } from 'react-native';

export default function useAspectRatio(imageLink?: string) {
	const [aspectRatio, setAspectRatio] = useState<number>(1);

	useEffect(() => {
		if (imageLink) {
			Image.getSize(
				imageLink,
				(w, h) => setAspectRatio(w / h),
				() => setAspectRatio(1) // fallback if it fails
			);
		}
	}, [imageLink]);

	return aspectRatio;
}
