import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "@/hooks/useUsers";

const UserViewPage = () => {
  const { userData, loading, error, fetchUser, manageUserRequest } = useUsers();
  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      await fetchUser({ userId: id });
    };

    loadUser();
  }, []);

  const handleConfirmLive = () => {
    const payload = {
      userId: id,
      adminStatus: "APPROVED",
    };
    manageUserRequest(payload);
  };
  const handleRefuseLive = () => {
    const payload = {
      userId: id,
      adminStatus: "REJECTED",
    };
    manageUserRequest(payload);
  };

  return (
    <div className="p-4">
      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && userData === null && <p>No user found</p>}
      {userData !== null && (
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">User id: {userData.id}</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={handleConfirmLive}
                className="bg-gray-800 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Confirm live phase
              </button>
              <button
                onClick={handleRefuseLive}
                className="bg-gray-800 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Refuse live phase
              </button>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Latest balance</h1>
              <div className="flex justify-between items-center">
                <p className="flex-1 text-lg font-semibold">Balance</p>
                <p className="flex-1 text-lg font-semibold">Equity close</p>
                <p className="flex-1 text-lg font-semibold">Equity low</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex-1 text-lg font-semibold">
                  {userData.currentBalance}
                </p>
                <p className="flex-1 text-lg font-semibold">
                  {userData.equityClose}
                </p>
                <p className="flex-1 text-lg font-semibold">
                  {userData.equityLow}
                </p>
              </div>
              <hr />
            </div>
          </div>
          <div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Matrics</h1>
              <div className="flex justify-between items-center">
                <p className="flex-1 text-lg font-semibold">initial balance</p>
                <p className="flex-1 text-lg font-semibold">
                  Absolute equity drawdown
                </p>
                <p className="flex-1 text-lg font-semibold">
                  Max daily equity drawdown
                </p>
                <p className="flex-1 text-lg font-semibold">Trading days</p>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="flex-1 text-lg font-semibold">
                  {userData.initialBalance}
                </p>
                <p className="flex-1 text-lg font-semibold">
                  {userData.absoluteEquityDrawdown}
                </p>
                <p className="flex-1 text-lg font-semibold">
                  {userData.maxDailyEquityDrawdown}
                </p>
                <p className="flex-1 text-lg font-semibold">
                  {userData.tradingDays}
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserViewPage;
