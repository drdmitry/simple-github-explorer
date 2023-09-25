export interface IUserRepository {
  id: number;
  name: string;
  description: string;
  full_name: string;
  private: boolean;
  html_url: string;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
};
