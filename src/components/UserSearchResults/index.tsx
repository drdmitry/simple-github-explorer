import type { FC } from "react";

import User from "~/components/User";
import useStore from "~/store/useStore";

export const UserSearchResults: FC = () => {
  const {
    loadingUsers,
    errorUsers,
    users,
    selectedUser,
    searchTerm,
    touched,
  } = useStore();

  return (
    <div className="max-w-md flex flex-col px-4">
      {loadingUsers && <div className="text-gray-400 text-md my-4 italic">Loading users...</div>}
      {errorUsers && <div className="text-red-400 text-md my-4 italic">Error: {errorUsers}</div>}
      {touched && !loadingUsers && users && users.length === 0 && (
        <div className="text-gray-400 text-md my-4 italic">No users found</div>
      )}
      {touched && !loadingUsers && users && users.length > 0 && (
        <>
          <div className="text-md my-4">
            Search results for &quot;{searchTerm}&quot;
          </div>
          <div className="flex flex-col gap-1">
            {users.map((user) => (
              <User expanded={user.id === selectedUser?.id} user={user} key={user.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserSearchResults;
