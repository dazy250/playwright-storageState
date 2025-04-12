import { APIRequestContext, expect } from '@playwright/test';
import {DummyJsonAPI} from './dummyJsonAPI'

export class ApiSandbox {
    private dummyJsonAPI: DummyJsonAPI;

    constructor(public readonly request: APIRequestContext){
        this.dummyJsonAPI = new DummyJsonAPI(request);
    }

    async POSTLogin() {
        let loginResponse = await this.dummyJsonAPI.postLogin();

        expect(loginResponse.ok()).toBeTruthy();
    }

    // ASSERTS
    async verifyLoggedUser(firstName: string, lastName: string) {
        let loginResponse =  await this.dummyJsonAPI.getLogin();
        expect(loginResponse.ok()).toBeTruthy();
        const userData = await loginResponse.json();

        expect(userData.username).toBe(firstName);
        expect(userData.lastName).toBe(lastName);
    }



}