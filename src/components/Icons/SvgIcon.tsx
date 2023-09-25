import type { FC } from "react";

import SvgChevronDownIcon from "./SvgChevronDownIcon";
import SvgChevronUpIcon from "./SvgChevronUpIcon";
import SvgGitHubIcon from "./SvgGitHubIcon";
import SvgSearchIcon from "./SvgSearchIcon";
import SvgStarIcon from "./SvgStarIcon";

export const ICON_NAMES = {
  ChevronDown: 'chevron-down',
  ChevronUp: 'chevron-up',
  GitHub: 'github',
  Search: 'search',
  Star: 'star',
} as const;

type ObjectValues<T> = T[keyof T];
export type IconName = ObjectValues<typeof ICON_NAMES>;

interface IProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const SvgIcon: FC<IProps> = ({ name, size, className }) => {
  switch (name) {
    case ICON_NAMES.ChevronDown:
      return <SvgChevronDownIcon size={size} className={className} />;

    case ICON_NAMES.ChevronUp:
      return <SvgChevronUpIcon size={size} className={className} />;

    case ICON_NAMES.GitHub:
      return <SvgGitHubIcon size={size} className={className} />;

    case ICON_NAMES.Search:
      return <SvgSearchIcon size={size} className={className} />;

    case ICON_NAMES.Star:
      return <SvgStarIcon size={size} className={className} />;

    default:
      return null;
  };
};

export default SvgIcon;
