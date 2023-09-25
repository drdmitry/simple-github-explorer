import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { UserSearchResults } from './index';
import useStore from '~/store/useStore';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/UserSearchResults',
  component: UserSearchResults,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof UserSearchResults>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
  },
  render: (args) => {
    const {
      searchTerm,
      setSearchTerm,
      searchUsers,
    } = useStore();

    useEffect(() => {
      setSearchTerm('octocat');
    }, []);
    
    useEffect(() => {
      if (searchTerm) {
        void searchUsers(searchTerm);
      }
    }, [searchTerm]);

    return (
      <section className="max-w-md m-auto">
        <UserSearchResults {...args} />
      </section>
    );
   },
};
