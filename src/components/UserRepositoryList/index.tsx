import type { FC } from "react";
import type { IUserRepository } from "~/interfaces/user-repository.interface";

import UserRepository from "~/components/UserRepository";

interface IProps {
  repos: IUserRepository[];
};

export const UserRepositoryList: FC<IProps> = ({ repos }) => {
  return (
    <div className="flex flex-col gap-1 transition ease-in-out">
      {repos.map((repo) => <UserRepository key={repo.id} repo={repo} />)}
    </div>
  );
};

export default UserRepositoryList;
