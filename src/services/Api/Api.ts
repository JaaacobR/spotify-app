import axios, { AxiosInstance } from 'axios';

class ApiService{
    private accessToken?: string;
  
    private axios: AxiosInstance;
  
    private restUrl: string;
  
    private baseUrl = '';
  
    constructor() {
      this.restUrl = '';
      this.axios = axios.create({
        baseURL: this.baseUrl,
      });
}
}

export default ApiService;