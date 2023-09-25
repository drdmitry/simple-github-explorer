import type { FC } from "react";

import type { IUserRepository } from "~/interfaces/user-repository.interface";

import SvgGitHub from "~/components/Icons/SvgGitHubIcon";
import SvgStar from "~/components/Icons/SvgStarIcon";
import SvgIcon, { ICON_NAMES } from "../Icons/SvgIcon";

interface IProps {
  repo: IUserRepository;
};

export const UserRepository: FC<IProps> = ({ repo }) => {
  const handleRepoClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    window.open(repo.html_url, "_blank");
  };

  return (
    <div className="w-full flex flex-col p-3 rounded-md bg-slate-300 min-w-[200px] shadow-sm">
      <div className="flex flex-col min-[370px]:flex-row align-center justify-between">
        <div className="text-lg font-bold text-gray-900">
          {repo.name}
        </div>
        <div className="text-sm text-gray-500 self-center flex flex-row gap-1 items-center">
          {repo.stargazers_count}
          <SvgIcon name={ICON_NAMES.Star} size={16} />
        </div>
      </div>
      <div className="text-sm text-gray-500">
        {repo.description}
      </div>
      <div className="h-2" />
      <div
        className="flex flex-row items-center place-self-end text-sm text-gray-500 gap-2 hover:text-gray-700 cursor-pointer overflow-x-hidden"
        onClick={handleRepoClick}
        title="opens in new browser tab"
      >
        <SvgGitHub size={20} />
        {repo.full_name}
      </div>
    </div>
  );
};

export default UserRepository;
