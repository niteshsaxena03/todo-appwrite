import { Client,Account,Databases } from "appwrite";

const client=new Client();

client.setEndpoint("http://localhost/v1").setProject("66540d900012c74232e4");

//Account
export const account=new Account(client);

//Database

export const databases = new Databases(client, "66540dcf001fc3983bb5");