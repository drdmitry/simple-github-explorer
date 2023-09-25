import type { Meta, StoryObj } from '@storybook/react';

import type { IUser } from '~/interfaces/user.interface';

import { User } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/User',
  component: User,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

const USER: IUser = {
  id: 1,
  login: 'mojombo',
  avatar_url: 'https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
  html_url: 'https://github.com/mojombo',
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    user: USER,
    expanded: false,
  },
  render: (args) => (
    <div className="max-w-md w-full flex">
      <User {...args} />
    </div>
  ),
};
