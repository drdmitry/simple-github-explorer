import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import UserRepository from './';

import type { IUserRepository } from '~/interfaces/user-repository.interface';

// Mock the repository data for testing
const mockRepo: IUserRepository = {
  id: 1,
  name: 'Test Repo',
  stargazers_count: 42,
  description: 'A test repository',
  html_url: 'https://github.com/testuser/test-repo',
  full_name: 'testuser/test-repo',
  private: false,
  created_at: '2020-01-01T00:00:00Z',
  updated_at: '2020-01-01T00:00:00Z',
};

// Function to render the UserRepository component
function renderUserRepository() {
  return render(<UserRepository repo={mockRepo} />);
}

describe("UserRepository", () => {
  test('renders repository name correctly', () => {
    const { getByText } = renderUserRepository();
    const repoNameElement = getByText('Test Repo');
    expect(repoNameElement).toBeInTheDocument();
  });

  test('renders star count and star icon correctly', () => {
    const { getByText, container } = renderUserRepository();
    const starCountElement = getByText('42');
    expect(starCountElement).toBeInTheDocument();
    const starIconElement = container.querySelector('svg');
    expect(starIconElement).toBeInTheDocument();
  });

  test('renders repository description correctly', () => {
    const { getByText } = renderUserRepository();
    const descriptionElement = getByText('A test repository');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('opens repository link in a new tab when clicked', () => {
    const spyWindowOpen = jest.spyOn(window, 'open');
    spyWindowOpen.mockImplementation(jest.fn());
    const { getByText } = renderUserRepository();
    const repositoryLinkElement = getByText('testuser/test-repo');
    fireEvent.click(repositoryLinkElement);
    expect(spyWindowOpen).toHaveBeenCalledWith('https://github.com/testuser/test-repo', '_blank');
  });

  test("renders UserRepository unchanged", () => {
    const { container } = renderUserRepository();
    expect(container).toMatchSnapshot();
  });
});
