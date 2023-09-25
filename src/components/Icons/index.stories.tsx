import type { Meta, StoryObj } from '@storybook/react';

import { ICON_NAMES, SvgIcon } from './SvgIcon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Icons/SvgIcon',
  component: SvgIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      options: Object.values(ICON_NAMES),
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CustomIcon: Story = {
  render: ({ name, size }) => <SvgIcon name={name} size={size} />,
  args: {
    name: ICON_NAMES.ChevronDown,
    size: 48,
  },
};

export const ChevronDownIcon: Story = {
  args: {
    name: ICON_NAMES.ChevronDown,
    size: 48,
  },
};

export const ChevronUpIcon: Story = {
  args: {
    name: ICON_NAMES.ChevronUp,
    size: 48,
  },
};

export const GitHubIcon: Story = {
  args: {
    name: ICON_NAMES.GitHub,
    size: 48,
  },
};

export const StarIcon: Story = {
  args: {
    name: ICON_NAMES.Star,
    size: 48,
  },
};

export const SearchIcon: Story = {
  args: {
    name: ICON_NAMES.Search,
    size: 48,
  },
};

export const AllIcons: Story = {
  render: ({ size }) => (
    <ul className="grid grid-rows-1 grid-cols-5 auto-cols-max">
      {Object.values(ICON_NAMES).map((key) => (
        <li key={key} className="bg-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 m-1 cursor-pointer">
          <div className="text-center p-3">
            <div className="flex w-full justify-center">
              <SvgIcon name={key} size={size} />
            </div>
            <span className="text-xs p-2">
              {key}
            </span>
          </div>
        </li>
      ))}
    </ul>
  ),
  args: {
    name: ICON_NAMES.Star,
    size: 48,
  },
};
