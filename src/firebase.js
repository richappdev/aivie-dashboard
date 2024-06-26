import firebase from 'firebase'
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

const db = app.firestore()
const storage = app.storage()
const icfDocumentCollection = db.collection('ICFDocuments')
const subjectCollection = db.collection('subjects')
const organizationCollection = db.collection('organizations')
const studyId = process.env.REACT_APP_AIVIE_STUDY

export const loadSubjects = async () => {
  const subjects = await (await subjectCollection.where('study', '==', studyId).get())
    .docs.map(doc => ({ key: doc.id, ...doc.data() }))
  console.log(subjects);
  return subjects
}

export const loadProfile = async (userId) => (await subjectCollection.doc(userId).get()).data();

export const fetchUserPhoto = async (userDoc) => {
  if (!userDoc.userPhoto)
    return null;
  const path = userDoc.userPhoto.path;
  return await storage.ref(path).getDownloadURL()
}

export const loadIcfDocuments = async () => {
  const documents = await (await icfDocumentCollection.where('study', '==', studyId).get())
    .docs.map(doc => ({ key: doc.id, ...doc.data() }))
  console.log(documents);
  return documents
}

export const loadOrganizations = async () => {
  const organizations = await (await organizationCollection.orderBy('country').get())
    .docs.map(doc => ({ key: doc.id, ...doc.data() }))
  console.log(organizations);
  return organizations
}

export const auth = app.auth()
export default app