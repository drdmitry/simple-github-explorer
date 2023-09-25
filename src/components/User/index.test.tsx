import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import type { IUser } from '~/interfaces/user.interface';

import User from './';

// Mock the user data for testing
const mockUser: IUser = {
  id: 1,
  login: 'testuser',
  avatar_url: 'https://example.com/avatar.jpg',
  html_url: 'https://example.com/path/',
};

// Define a function to render the User component
function renderUserComponent(expanded: boolean) {
  return render(<User user={mockUser} expanded={expanded} />);
}

// Mock the useStore hook
jest.mock('~/store/useStore', () => ({
  __esModule: true,
  default: () => ({
    repos: [],
    loadingRepos: false,
    selectedUser: null,
    selectUser: jest.fn(),
    fetchUserRepos: jest.fn(),
  }),
}));

jest.mock('../../services/api-github.service', () => ({
  apiGetUserRepos: jest.fn(),
}));

describe('User', () => {
  test('renders user avatar and login name correctly', () => {
    const { getByAltText, getByText } = renderUserComponent(true);
    const avatarElement = getByAltText('testuser');
    const loginElement = getByText('testuser');
    expect(avatarElement).toBeInTheDocument();
    expect(loginElement).toBeInTheDocument();
  });

  test('toggles expanded state when clicked', () => {
    const { getByRole } = renderUserComponent(true);
    const userElement = getByRole('button');
    fireEvent.click(userElement);

    // Add assertions here to check if the expanded state changes correctly
    // You can access the state and actions provided by useStore to verify this behavior.
  });

  test('displays loading message when expanded and loadingRepos is true', () => {
    const useStoreModule = require('~/store/useStore');
    useStoreModule.default = jest.fn(() => ({
        repos: [],
        loadingRepos: true,
        selectedUser: null,
        selectUser: jest.fn(),
        fetchUserRepos: jest.fn(),
    }));
    const { getByText } = renderUserComponent(true);
    const loadingMessageElement = getByText('Loading...');
    expect(loadingMessageElement).toBeInTheDocument();
  });

  test('displays "No repositories" message when expanded, loadingRepos is false, and there are no repos', () => {
    const useStoreModule = require('~/store/useStore');
    useStoreModule.default = jest.fn(() => ({
        repos: [],
        loadingRepos: false,
        selectedUser: null,
        selectUser: jest.fn(),
        fetchUserRepos: jest.fn(),
    }));
    const { getByText } = renderUserComponent(true);
    const noReposMessageElement = getByText('No repositories');
    expect(noReposMessageElement).toBeInTheDocument();
  });

  test('displays UserRepositoryList when expanded, loadingRepos is false, and there are repos', () => {
    // Mock the useStore hook to provide mock repo data
    const useStoreModule = require('~/store/useStore');
    useStoreModule.default = jest.fn(() => ({
        repos: [
          {
            id: 1,
            name: 'Test Repo 1',
            stargazers_count: 42,
            description: 'A test repository',
            html_url: 'https://github.com/testuser/test-repo-1',
            full_name: 'testuser/test-repo-1',
          },
        ],
        loadingRepos: false,
        selectedUser: null,
        selectUser: jest.fn(),
        fetchUserRepos: jest.fn(),
    }));
    const { getByText } = renderUserComponent(true);
    const userRepositoryListElement = getByText('Test Repo 1');
    expect(userRepositoryListElement).toBeInTheDocument();
  });
});
