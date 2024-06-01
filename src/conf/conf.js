const conf ={
    AppwriteURL:String(import.meta.env.VITE_APPWRITE_URL),
    AppwriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    AppwriteDatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    AppwritecollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    AppwriteBucketID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default conf