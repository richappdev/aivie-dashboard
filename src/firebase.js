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
const icfDocumentCollection = db.collection('ICFDocuments')
const subjectCollection = db.collection('subjects')
const studyId = process.env.REACT_APP_AIVIE_STUDY

export const loadSubjects = async () => {
    const subjects = await (await subjectCollection.where('study', '==', studyId).get())
        .docs.map(doc => ({ key: doc.id, ...doc.data() }))
    console.log(subjects);
    return subjects
}

export const loadIcfDocuments = async () => {
    const documents = await (await icfDocumentCollection.where('study', '==', studyId).get())
        .docs.map(doc => ({ key: doc.id, ...doc.data() }))
    console.log(documents);
    return documents
}

export const auth = app.auth()
export default app