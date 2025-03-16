import admin from 'firebase-admin';
import serviceAccount from './on-demand-2bfa5-firebase-adminsdk-fbsvc-1c6ae7eb02.json' with { type: 'json' };
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });
  
  // Example for Firestore
  const db = admin.firestore();
  export { db };
  