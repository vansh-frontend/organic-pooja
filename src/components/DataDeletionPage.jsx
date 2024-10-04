import React, { useState } from 'react';
import { getAuth, deleteUser } from 'firebase/auth';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import './DataDeletionPage.css';

const firebaseConfig = {
  apiKey: "AIzaSyAn22g0weuE3OcbGoKr9zLiji2-if4xOao",
  authDomain: "organicbypooja-2803.firebaseapp.com",
  projectId: "organicbypooja-2803",
  storageBucket: "organicbypooja-2803.appspot.com",
  messagingSenderId: "700836761199",
  appId: "1:700836761199:web:9c2143b37bf800441a079a",
  measurementId: "G-Z834VDBXBX"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DataDeletionPage = () => {
  const [deletionStatus, setDeletionStatus] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDeleteData = async () => {
    setIsDeleting(true);
    setDeletionStatus('');

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        setDeletionStatus('No user is currently logged in.');
        return;
      }
      try {
        await deleteDoc(doc(db, 'users', user.uid));
      } catch (firestoreError) {
        console.error('Error deleting user document:', firestoreError);
        if (firestoreError.code === 'permission-denied') {
          throw new Error('Permission denied: Unable to delete user data');
        } else {
          throw new Error('Failed to delete user data');
        }
      }

      try {
        await deleteUser(user);
        setDeletionStatus('Your account and data have been successfully deleted.');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (authError) {
        console.error('Error deleting user account:', authError);
        if (authError.code === 'auth/requires-recent-login') {
          throw new Error('Recent authentication required');
        } else {
          throw new Error('Failed to delete user account');
        }
      }
    } catch (error) {
      console.error('Deletion error:', error);
      if (error.message === 'Recent authentication required') {
        setDeletionStatus('For security reasons, please log out and log back in before deleting your account.');
      } else if (error.message.includes('Permission denied')) {
        setDeletionStatus('You do not have permission to delete your data. Please contact support.');
      } else if (error.message === 'Failed to delete user data') {
        setDeletionStatus('Error deleting user data. Please try again or contact support.');
      } else if (error.message === 'Failed to delete user account') {
        setDeletionStatus('Error deleting user account. Please try again or contact support.');
      } else {
        setDeletionStatus('An unexpected error occurred. Please try again or contact support.');
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const handleContactSupport = () => {
    window.location.href = 'https://organicbypooja.in/contact';
  };

  return (
    <div className="data-deletion-page">
      <h1>Data Deletion Instructions</h1>
      <p>
        At <strong>Organic Pooja</strong>, you can delete your personal data permanently.
      </p>

      <h2>How to Delete Your Data</h2>
      <p>Click the button below to delete all your data, including your account.</p>

      <button
        onClick={handleDeleteData}
        disabled={isDeleting}
        className={`delete-button ${isDeleting ? 'deleting' : ''}`}
      >
        {isDeleting ? 'Deleting...' : 'Delete My Data'}
      </button>

      {deletionStatus && (
        <p className={`status-message ${deletionStatus.includes('successfully') ? 'success' : 'error'}`}>
          {deletionStatus}
        </p>
      )}

      <button onClick={handleContactSupport} className="contact-support-button">
        Contact Support
      </button>
    </div>
  );
};

export default DataDeletionPage;