// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBdPCgpYNy85ixXSYg4OefiLuE-BavBkU8",
  authDomain: "nubiomed-health.firebaseapp.com",
  databaseURL: "https://nubiomed-health.firebaseio.com",
  projectId: "nubiomed-health",
  storageBucket: "",
  messagingSenderId: "912900274394",
  appId: "1:912900274394:web:8d30b35467efd381"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference emails collection
var emailsRef = firebase.database().ref("emails");

// Liste for form submit
document.getElementById("email-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  
  // Get values
  var email = getInputVal('email-input');

  // Save email
  saveEmail(email);
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save emails to firebase
function saveEmail(email) {
  var newEmailRef = emailsRef.push();
  newEmailRef.set({
    email: email
  })
}