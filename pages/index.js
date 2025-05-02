// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [role, setRole] = useState('');
  const router = useRouter();

  // Handle role selection (Buyer or Seller)
  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    // Redirect to choose-action page with the selected role
    router.push(`/choose-action?role=${selectedRole}`);
  };

  return (
    <div style={styles.container}>
      <img src="/image1.png" alt="Main Image" style={{ maxWidth: '400px', marginBottom: '20px' }} />
      <h1 style={styles.header}>Welcome to the Property Booking App</h1>
      <h2 style={styles.subheader}>Are you a Buyer or a Seller?</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleRoleSelection('buyer')} style={styles.button}>
          Buyer
        </button>
        <button onClick={() => handleRoleSelection('seller')} style={styles.button}>
          Seller
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    background: '#f0f0f0',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  subheader: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#555',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    background: '#0070f3',
    color: '#fff',
  },
};
