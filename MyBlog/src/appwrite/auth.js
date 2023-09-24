import conf from "./config/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // project endpoint
      .setProject(conf.appwriteProjectId); // project id

    // adding account value from client imported from conf
    this.account = new Account(this.client);
  }

  //   create a new user account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );
      if (userAccount) {
        // call login method from below
        return this.login;
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //  login user method
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //   get the current user after login and drop on the home page
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  //   log out
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default AuthService;
