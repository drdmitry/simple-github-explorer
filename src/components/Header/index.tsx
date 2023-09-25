import type { FC } from "react";

import SearchBar from "~/components/SearchBar";
import useStore from "~/store/useStore";

export const Header: FC = () => {
  const { touched } = useStore();

  return (
    <header className="w-full p-4">
      {touched === false && (
        <div className="container flex flex-col m-auto pt-0 md:pt-14 lg:pt-28 items-center mb-4 sm:mb-8 md:mb-20 transition ease-in-out duration-200">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-500 max-[370px]:font-bold max-[370px]:text-[1.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]">
            Simple <span className="text-sky-500">GitHub</span> Explorer
          </h1>
        </div>
      )}
      <div className="max-w-3xl m-auto flex flex-col sm:flex-row items-center gap-4">
        {touched && (
          <h1 className="text-3xl max-[370px]:text-[1.2rem] sm:text-xs text-gray-500 font-bold sm:font-bold flex flex-row sm:flex-col gap-2 sm:gap-0 items-center">
            <span>Simple</span>
            <span className="text-sky-500">GitHub</span>
            <span>Explorer</span>
          </h1>
        )}
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
