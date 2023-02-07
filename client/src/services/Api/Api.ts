import axios, { AxiosInstance } from "axios";

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

  async logIn(credentials: Credentials): Promise<void> {
    try {
      const res = await this.axios.post(
        this.baseUrl + "/api/accounts/sign_in",
        {
          email: credentials.email,
          hash_password: credentials.hash_password,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}

export default ApiService;