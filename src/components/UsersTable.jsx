import { useEffect } from 'react';
import { useUsers } from '@/hooks/useUsers';
import { Link } from 'react-router-dom';

const UsersTable = () => {
	const { data, loading, error, fetchUsers } = useUsers();

	useEffect(() => {
		const loadUsers = async () => {
			await fetchUsers();
		};

		loadUsers();
	}, []);

	return (
		<div className='p-4'>
			{loading && <p className='text-blue-600'>Loading...</p>}
			{error && <p className='text-red-600'>{error}</p>}
			{!loading && !error && data.length === 0 && <p>No data found</p>}

			{data?.length > 0 && (
				<table className='min-w-full bg-white border border-gray-200 rounded-lg shadow-md'>
					<thead className='bg-gray-100 border-b border-gray-200'>
						<tr>
							<th className='px-4 py-2 text-left text-gray-600'>
								Name
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Email
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Current Balance
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Initial Balance
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Equity Close
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Equity Low
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Profit Target
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Absolute Equity Drawdown
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Trading Days
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Max Daily Equity Drawdown
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Status
							</th>
							<th className='px-4 py-2 text-left text-gray-600'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((d, index) => (
							<tr
								key={d.id + '-' + index}
								className='hover:bg-gray-50'
							>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.name}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.email}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.currentBalance}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.initialBalance}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.equityClose}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.equityLow}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.profitTarget}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.absoluteEquityDrawdown}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.tradingDays}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.maxDailyEquityDrawdown}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									{d.challengeStatus}
								</td>
								<td className='px-4 py-2 border-b border-gray-200'>
									<Link
										to={`/view/${d._id}`}
										className='bg-gray-800 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium'
									>
										View
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default UsersTable;
