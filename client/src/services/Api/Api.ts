import axios, { AxiosInstance } from "axios";

import { User } from "./types";

interface Credentials {
  email: string;
  hash_password: string;
}
class ApiService {
  private axios: AxiosInstance;

  private baseUrl = "http://localhost:4000";

  constructor() {
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async logIn(credentials: Credentials): Promise<User | null> {
    try {
      const res = await this.axios.post(
        this.baseUrl + "/api/accounts/sign_in",
        {
          email: credentials.email,
          hash_password: credentials.hash_password,
        }
      );
      return res.data;
    } catch (err) {
      return null;
    }
  }
}

export default ApiService;
