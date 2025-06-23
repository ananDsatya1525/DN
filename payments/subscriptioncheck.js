// subscriptionCheck.js
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyCO6VsEBILvh_PoTXyC0_soOXP2XcLyYBE",
//     authDomain: "usersform-16326.firebaseapp.com",
//     databaseURL: "https://usersform-16326-default-rtdb.firebaseio.com",
//     projectId: "usersform-16326",
//     storageBucket: "usersform-16326.appspot.com",
//     messagingSenderId: "1022738618925",
//     appId: "1:1022738618925:web:41cd05df76212b20e1b6a4",
//     measurementId: "G-J7ECPXGQ8P"
//   };

// const auth = getAuth();
// const database = getDatabase();

// Function to check if the user is already subscribed
async function checkSubscriptionStatus() {
    const user = auth.currentUser;

    if (user) {
        const uid = user.uid;
        const userRef = ref(database, `users/${uid}/subscription`);

        try {
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
                const subscriptionData = snapshot.val();
                if (subscriptionData.status === "active") {
                    showAlreadySubscribedMessage();
                } else {
                    showSubscriptionCard();
                }
            } else {
                showSubscriptionCard();
            }
        } catch (error) {
            console.error("Error fetching subscription data:", error);
        }
    } else {
        console.error("No user is signed in.");
        window.location.href = 'login.html'; // Redirect to login if not signed in
    }
}

// Function to show "Already Subscribed" message
function showAlreadySubscribedMessage() {
    const subscriptionContainer = document.querySelector('.subscription-container');
    subscriptionContainer.innerHTML = `
        <div class="already-subscribed">
            <h2>You are already a subscriber!</h2>
            <p>Enjoy your benefits with the Gold plan.</p>
        </div>
    `;
}

// Function to show the subscription card
function showSubscriptionCard() {
    const subscriptionContainer = document.querySelector('.subscription-container');
    subscriptionContainer.innerHTML = `
        <div class="subscription-card gold">
            <h3>Gold Subscription</h3>
            <ul>
                <li>10% Off on all products</li>
                <li>Free Delivery on orders above ₹500</li>
                <li>Early Access to Price Drop Products</li>
                <li>Special Item for Free</li>
            </ul>
            <div class="payment-amount">Payment Amount: ₹999</div>
            <a href="#" class="pay-btn">Proceed to Payment</a>
        </div>
    `;
}

// Automatically check subscription status when the page loads
document.addEventListener('DOMContentLoaded', () => {
    checkSubscriptionStatus();
});
