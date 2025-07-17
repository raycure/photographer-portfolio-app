import { useState } from 'react';

export const useForm = <T extends object>(initialState: T) => {
	const [formData, setFormData] = useState<T>(initialState);

	const onInputChange = (text: string, fieldName: keyof T) => {
		setFormData((prev) => ({
			...prev,
			[fieldName]: text,
		}));
	};

	return { formData, setFormData, onInputChange };
};
