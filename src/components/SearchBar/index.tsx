import { useState, type FC, useRef } from "react";
import { z, type ZodError } from "zod";

import Button from "~/components/Button";
import SvgIcon from "~/components/Icons/SvgIcon";

import useStore from "~/store/useStore";

const usernameSchema = z
  .string()
  .max(39, { message: "Username must be 39 characters or less" })
  .regex(/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d]))*$/, {
    message:
    "Username can only contain alphanumeric characters and hyphens, and it cannot start or end with a hyphen",
  });

export const SearchBar: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    setSearchTerm: setStoreSearchTerm,
    searchUsers,
  } = useStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    try {
      if (event.target.value) usernameSchema.parse(event.target.value);
      setValidationError(null);
    } catch (error) {
      const errors = (error as ZodError)?.errors;
      if (errors && errors.length > 0 && errors[0]) {
        setValidationError(errors[0].message);
      }
    }
  };

  const handleInputContainerClick = () => {
    inputRef.current?.focus();
  };

  const hadleSearchClick = () => {
    setStoreSearchTerm(searchTerm);
    void searchUsers(searchTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      event.preventDefault();
      setStoreSearchTerm(searchTerm);
      void searchUsers(searchTerm);
    } else if (event.key === 'Escape') {
      setSearchTerm("");
      setValidationError(null);
    }
  };

  const buttonDisabled = String(searchTerm).length === 0;

  return (
    <div className="w-full flex flex-col sm:flex-row gap-1">
      <div className="relative w-full">
        <div className="absolute h-10 w-10 px-2 flex items-center" onClick={handleInputContainerClick}>
          <SvgIcon name="search" size={24} className="text-gray-600" />
        </div>
        <input
          ref={inputRef}
          placeholder="Search username"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          className="bg-gray-100 rounded-md border border-gray-300 py-2 px-4 pl-10 block w-full outline-none focus:shadow hover:border-gray-400 focus:border:gray-400"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {validationError && (
          <div className="absolute px-1 text-xs text-red-400">
            {validationError}
          </div>
        )}
      </div>
      <Button
        disabled={buttonDisabled}
        onClick={hadleSearchClick}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
