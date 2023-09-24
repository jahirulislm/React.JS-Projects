//  The best practice is to create a function that takes an object to hold all the .env variables as strings in production.
const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.VITE_APPWRITE_URL_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.VITE_APPWRITE_URL_DATABASE_ID),
  appwriteCollectionId: String(import.meta.VITE_APPWRITE_URL_COLLECTION_ID),
  appwriteBucketId: String(import.meta.VITE_APPWRITE_URL_BUCKET_ID),
};

export default conf;
