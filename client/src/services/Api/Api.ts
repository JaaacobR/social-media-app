import axios, { AxiosInstance } from "axios";

import { User , Credentials, PostData} from "./types";


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

  async createPost(postData:PostData) :Promise<void>{
    

  }
}

export default ApiService;
