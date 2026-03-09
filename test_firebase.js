const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

try {
    console.log("Testing space apiKey...");
    const app = initializeApp({
        apiKey: " ",
        projectId: "demo-project",
        appId: "1:1234567890:web:1234567890",
        authDomain: "demo-project.firebaseapp.com",
    }, "test7");
    const auth = getAuth(app);
    console.log("Success with space apiKey");
} catch (e) {
    console.error("Failed with space apiKey:", e.code || e.message);
}

try {
    console.log("Testing process.env.NEXT_PUBLIC_FIREBASE_API_KEY...");
    console.log("Value:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
    console.log("Boolean:", !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
} catch (e) {
}
