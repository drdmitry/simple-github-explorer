import type { FC } from "react";
import Image from "next/image";

import type { IUser } from "~/interfaces/user.interface";

import UserRepositoryList from "~/components/UserRepositoryList";
import SvgChevronUp from "~/components/Icons/SvgChevronUpIcon";
import SvgChevronDown from "~/components/Icons/SvgChevronDownIcon";
import useStore from "~/store/useStore";

interface IProps {
  user: IUser;
  expanded: boolean;
};

export const User: FC<IProps> = ({ user, expanded }) => {
  const { avatar_url, login } = user;

  const {
    loadingRepos,
    repos,
    selectedUser,
    selectUser,
    fetchUserRepos,
  } = useStore();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (selectedUser?.id !== user.id) {
      selectUser(user, fetchUserRepos);
    } else {
      selectUser(null);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        className="flex items-center justify-between cursor-pointer bg-slate-200 hover:bg-slate-300 rounded-md text-gray-500 hover:text-gray-700"
        role="button"
        tabIndex={0}
        onClick={handleClick}
      >
        <div className="flex flex-row p-4 gap-2 items-center truncate">
          <Image src={avatar_url} width={32} height={32} alt={login} className="rounded-full" />
          <span className="truncate overflow-x-hidden">{login}</span>
        </div>
        <div className="px-3">
          {expanded ? <SvgChevronUp size={16} /> : <SvgChevronDown size={16} />}
        </div>
      </div>
      {expanded && loadingRepos && (
        <div className="pl-6 text-gray-400 text-md my-4 italic">Loading...</div>
      )}
      {expanded && !loadingRepos && repos && repos.length === 0 && (
        <div className="pl-6 text-gray-400 text-md my-4 italic">No repositories</div>
      )}
      {expanded && repos && repos.length > 0 && (
        <div className="pl-6">
          <UserRepositoryList repos={repos} />
        </div>
      )}
    </div>
  );
};

export default User;
