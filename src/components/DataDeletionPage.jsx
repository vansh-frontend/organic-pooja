import React, { useState } from 'react';
import { getAuth, deleteUser } from 'firebase/auth';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiAlertTriangle, FiMessageCircle, FiShield } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleDeleteData = async () => {
    setIsDeleting(true);
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        toast.error('No user is currently logged in.');
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
        toast.success('Your account and data have been successfully deleted.');
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
        toast.error('For security reasons, please log out and log back in before deleting your account.');
      } else if (error.message.includes('Permission denied')) {
        toast.error('You do not have permission to delete your data. Please contact support.');
      } else if (error.message === 'Failed to delete user data') {
        toast.error('Error deleting user data. Please try again or contact support.');
      } else if (error.message === 'Failed to delete user account') {
        toast.error('Error deleting user account. Please try again or contact support.');
      } else {
        toast.error('An unexpected error occurred. Please try again or contact support.');
      }
    } finally {
      setIsDeleting(false);
      setShowConfirmation(false);
    }
  };

  const handleContactSupport = () => {
    window.location.href = 'https://organicbypooja.in/contact';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen px-4 py-12 bg-gradient-to-br from-green-50 to-blue-50 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Data Deletion
          </h1>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            At <strong className="font-semibold text-green-600">Organic Pooja</strong>, we respect your privacy and give you control over your data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div 
            variants={itemVariants}
            className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h2 className="flex items-center mb-4 text-xl font-semibold text-gray-900">
                <FiShield className="mr-2 text-green-500" /> Data Protection
              </h2>
              <p className="mb-4 text-base text-gray-600">
                We take your privacy seriously. Here's what you need to know about deleting your data:
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-500 list-disc list-inside">
                <li>All your personal information will be permanently removed</li>
                <li>Your order history and preferences will be deleted</li>
                <li>You won't be able to recover this information later</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConfirmation(true)}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FiTrash2 className="mr-2" />
                Initiate Data Deletion
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h2 className="flex items-center mb-4 text-xl font-semibold text-gray-900">
                <FiMessageCircle className="mr-2 text-blue-500" /> Need Assistance?
              </h2>
              <p className="mb-4 text-base text-gray-600">
                If you have any questions or concerns about deleting your data, our support team is here to help.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-gray-500 list-disc list-inside">
                <li>Get clarification on the deletion process</li>
                <li>Learn about data retention policies</li>
                <li>Explore alternatives to account deletion</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactSupport}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiMessageCircle className="mr-2" />
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md p-5 bg-white rounded-lg shadow-xl"
            >
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                <FiAlertTriangle className="mr-2 text-yellow-500" /> Confirm Deletion
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                Are you sure you want to delete your account and all associated data? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDeleteData}
                  disabled={isDeleting}
                  className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isDeleting ? 'Deleting...' : 'Confirm Delete'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer position="bottom-center" autoClose={5000} />
    </motion.div>
  );
};

export default DataDeletionPage;