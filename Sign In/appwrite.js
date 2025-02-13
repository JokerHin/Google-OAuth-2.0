import { Client, Account } from "appwrite";

const { VITE_PROJECT_ID, VITE_ENDPOINT } = import.meta.env;
console.log(VITE_PROJECT_ID, VITE_ENDPOINT);

const client = new Client()
  .setEndpoint(VITE_ENDPOINT)
  .setProject(VITE_PROJECT_ID)
  .setMode("no-cors"); // Add this line to set the request's mode to 'no-cors'

const account = new Account(client);

export { account };
