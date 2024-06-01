import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.AppwriteURL)
      .setProject(conf.AppwriteProjectID);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login(email,password)
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(
        email,
        password
      );
      
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      
      return await this.account.get()
      
    } catch (error) {
      throw error;
    }
    return null
  }
  async logout() {
    try {
      
      return await this.account.deleteSessions()
      
    } catch (error) {
      throw error;
    }
  }
}

const authService = new Authservice();

export default authService;
