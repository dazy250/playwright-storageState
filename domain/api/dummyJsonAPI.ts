import { APIRequestContext } from '@playwright/test';

export class DummyJsonAPI {
    
    public readonly baseUrl = `${process.env.BASE_URL}${process.env.LOGIN_URL}`;
    public readonly userName = `${process.env.USER}`;
    public readonly userPassword = `${process.env.USER_PASSWORD}`;

    constructor(private readonly request: APIRequestContext) {}

    async postLogin() {
        
        const body = {
            username: this.userName,
            password: this.userPassword
        };
    
        const response = await this.request.post(this.baseUrl, {
          data: body,
        });
        return response;
      }

      async getLogin() {
        const userResponse = await this.request.get('https://dummyjson.com/auth/me');
            
          return userResponse;
      }



      /*
    async getLogin() {
        const userResponse = await this.request.get('https://dummyjson.com/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          return userResponse;
      }
*/


      /*
      // 🔐 FETCH CHRONIONY ZASÓB
        const userResponse = await request.get('https://dummyjson.com/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      
        expect(userResponse.ok()).toBeTruthy();
        const userData = await userResponse.json();
      
        // ✅ SPRAWDZENIE DANYCH
        expect(userData.username).toBe('emilys');
        console.log('Zalogowano jako:', userData.firstName, userData.lastName);
        */
}