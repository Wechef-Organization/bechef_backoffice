import { toast } from 'sonner';

export const sendToast = (type: string, message: string) => {
	const commonStyle = {
		borderRadius: '8px',
		fontFamily: 'Montserrat, sans-serif',
		fontWeight: '400',
		fontSize: '15px',
		padding: '10px 20px',
		color: 'white',
	};

	if (type === 'success') {
		toast.success(message, {
			style: {
				...commonStyle,
				backgroundColor: '#D9032C',
			},
		});
	} else if (type === 'error') {
		toast.error(message, {
			style: {
				...commonStyle,
				backgroundColor: '#F44336',
			},
		});
	} else if (type === 'info') {
		toast(message, {
			style: {
				...commonStyle,
				backgroundColor: '#2196F3',
			},
		});
	} else if (type === 'warning') {
		toast.warning(message, {
			style: {
				...commonStyle,
				backgroundColor: '#FF9800',
			},
		});
	}
};
