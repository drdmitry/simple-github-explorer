import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { APICall, apiSearchUsers, apiGetUserRepos } from './api-github.service';

describe('APICall', () => {
  it('should make a successful GET request', async () => {
    const mockAxios = new MockAdapter(axios);
    const mockResponse = { data: 'mocked data' };

    mockAxios.onGet('https://api.github.com/test-endpoint').reply(200, mockResponse);

    const result = await APICall('https://api.github.com/test-endpoint');

    expect(result.error).toBeNull();
    expect(result.data).toEqual(mockResponse);
  });

  it('should handle a failed GET request', async () => {
    const mockAxios = new MockAdapter(axios);
    const mockError = 'Request failed with status code 404';

    mockAxios.onGet('https://api.github.com/non-existent-endpoint').reply(404, mockError);

    const result = await APICall('https://api.github.com/non-existent-endpoint');

    expect(result.error).toEqual(mockError);
    expect(result.data).toBeNull();
  });
});

describe('apiSearchUsers', () => {
  it('should call APICall with the correct URL for searching users', async () => {
    const searchTerm = 'testuser';
    const expectedUrl = `https://api.github.com/search/users?q=${searchTerm}&per_page=5`;

    const mockAxios = new MockAdapter(axios);

    // Mock the APICall function
    const mockAPICall = jest.fn(() => Promise.resolve([200, {}]));

    // Mock the Axios request
    mockAxios.onGet(expectedUrl).reply(mockAPICall);

    await apiSearchUsers(searchTerm);

    // Ensure APICall was called with the correct URL
    expect(mockAPICall).toHaveBeenCalled();
  });
});

describe('apiGetUserRepos', () => {
  it('should call APICall with the correct URL for getting user repos', async () => {
    const username = 'testuser';
    const expectedUrl = `https://api.github.com/users/${username}/repos`;

    // Create a new instance of axios and axios-mock-adapter
    const mockAxios = new MockAdapter(axios);

    // Mock the APICall function
    const mockAPICall = jest.fn(() => Promise.resolve([200, {}]));

    // Mock the Axios request
    mockAxios.onGet(expectedUrl).reply(mockAPICall);

    await apiGetUserRepos(username);

    // Ensure APICall was called with the correct URL
    expect(mockAPICall).toHaveBeenCalled();
  });
});
