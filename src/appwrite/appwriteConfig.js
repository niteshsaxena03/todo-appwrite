import { Client,Account,Databases } from "appwrite";

const client=new Client();

client.setEndpoint("http://localhost/v1").setProject("66540d900012c74232e4");

export const account=new Account(client);