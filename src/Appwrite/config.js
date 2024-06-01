import conf from "../conf/conf";
import { Client, Account, ID,Databases,Storage,Query } from "appwrite";
export class Service {
    client = new Client();
    databases;
    buckets;
    constructor() {
      this.client
        .setEndpoint(conf.AppwriteURL)
        .setProject(conf.AppwriteProjectID);
      this.databases = new Databases(this.client);
      this.buckets = new Storage(this.client);
    }
    async createPost({ title,slug,content,featuredImage,status,userID }) {
      try {
       return await this.databases.createDocument(conf.AppwriteDatabaseID,conf.AppwritecollectionID,slug,{
        title,
        content,
        featuredImage,
        status,
        userID
       })
       
      } catch (error) {
        throw error;
      }
    }
    async updatePost( slug,{title,content,featuredImage,status }) {
      try {
       return await this.databases.updateDocument(conf.AppwriteDatabaseID,conf.AppwritecollectionID,slug,{
        title,
        content,
        featuredImage,
        status,
       })
       
      } catch (error) {
        throw error;
      }
    }
    async deletePost(slug) {
      try {
        await this.databases.deleteDocument(conf.AppwriteDatabaseID,conf.AppwritecollectionID,slug)
       return true
      } catch (error) {
        console.log(error);
        return false
      }
      
    }
    async getPost(slug) {
      try {
       return  await this.databases.getDocument(conf.AppwriteDatabaseID,conf.AppwritecollectionID,slug)
      } catch (error) {
        console.log(error);
        return false
      }
      
    }
    async getPosts(queries=[Query.equal("status","active")]) {
      try {
       return  await this.databases.listDocuments(conf.AppwriteDatabaseID,conf.AppwritecollectionID,queries)
      } catch (error) {
        console.log(error);
        return false
      }
      
    }
    async uploadFile(file) {
      try {
       return  await this.buckets.createFile(
        conf.AppwriteBucketID, 
        ID.unique(),
        file)
      } catch (error) {
        console.log(error);
        return false
      }
      
    }
    async deleteFile(fileID) {
      try {
         await this.buckets.deleteFile(
        conf.AppwriteBucketID, 
        fileID

        )
    return true
      } catch (error) {
        console.log(error);
        return false
      }
      
    }
    getFilePreview(fileID) {
        return this.buckets.getFilePreview(
            conf.AppwriteBucketID,fileID
        )
      
    }
   
   
  
  }
  
  const service = new Service();
  
  export default service;