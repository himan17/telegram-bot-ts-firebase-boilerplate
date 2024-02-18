import admin from "firebase-admin";
import { dbConfig } from "../config/dbConfig";

class Database {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert({
        // @ts-ignore
        type: dbConfig.type,
        project_id: dbConfig.project_id,
        private_key_id: dbConfig.private_key_id,
        private_key: dbConfig.private_key,
        client_email: dbConfig.client_email,
        client_id: dbConfig.client_id,
        auth_uri: dbConfig.auth_uri,
        token_uri: dbConfig.token_uri,
        auth_provider_x509_cert_url: dbConfig.auth_provider_x509_cert_url,
        client_x509_cert_url: dbConfig.client_x509_cert_url,
        universe_domain: dbConfig.universe_domain,
      }),
    });

    this.db = admin.firestore();
  }

  async readData(collection: string, document: string) {
    const docRef = this.db.collection(collection).doc(document);
    const snapshot = await docRef.get();
    if (snapshot.exists) {
      const data = snapshot.data();
      return { id: snapshot.id, ...data };
    } else {
      return null;
    }
  }

  async writeData(collection: string, document: string, data: any) {
    const docRef = this.db.collection(collection).doc(document);
    await docRef.set(data);
  }

  async setData(collection: string, document: string, data: any) {
    const docRef = this.db.collection(collection).doc(document);
    await docRef.set(data, { merge: true });
  }

  async updateData(collection: string, document: string, data: any) {
    const docRef = this.db.collection(collection).doc(document);
    await docRef.update(data);
  }

  async getFullCollection(collection: string) {
    const querySnapshot = await this.db.collection(collection).get();
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  }
}

export const db = new Database();
