import { useState } from 'react';
import { toast } from 'react-toastify';

import { getUsers, getUser, manageRequest } from '@/api/adminApi';

export const useUsers = () => {
	const [data, setData] = useState([]);
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		setLoading(true);
		try {
			const data = await getUsers();
			setData(data);
			setError(null);
		} catch (err) {
			setError('Failed to load users.');
		} finally {
			setLoading(false);
		}
	};

	const fetchUser = async (payload) => {
		setLoading(true);
		try {
			const data = await getUser(payload);
			setUserData(data);
			setError(null);
		} catch (err) {
			setError('Failed to load user.');
		} finally {
			setLoading(false);
		}
	};

	const manageUserRequest = async (data) => {
		try {
			await manageRequest(data);
			toast.success('Status has been updated.');
		} catch (err) {
			toast.error('Failed to update status.');
		}
	};

	return {
		data,
		userData,
		loading,
		error,
		fetchUsers,
		fetchUser,
		manageUserRequest
	};
};
