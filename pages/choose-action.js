// pages/choose-action.js
import { useRouter } from 'next/router';

export default function ChooseActionPage() {
  const router = useRouter();
  const { role } = router.query; // Get the role from the query string

  // Handle Login and Register actions
  const handleActionSelection = (action) => {
    if (action === 'login') {
      router.push(`/login?role=${role}`);  // Redirect to login page with role
    } else {
      router.push(`/register?role=${role}`);  // Redirect to register page with role
    }
  };

  return (
    <>
      <img src="/image3.jpg" alt="Image 3" style={{ display: 'block', maxWidth: '400px', margin: '20px auto' }} />
      <div style={chooseActionStyles.container}>
        <div style={chooseActionStyles.card}>
        <h2 style={{ ...chooseActionStyles.header, fontSize: '1.2rem' }}>Please login or new user then register</h2>
        <div style={chooseActionStyles.buttonContainer}>
          <p style={{ marginBottom: '5px', fontSize: '1rem', color: '#333' }}>Enter email password</p>
          <button onClick={() => handleActionSelection('login')} style={chooseActionStyles.button}>
            Login
          </button>
          <p style={{ marginTop: '10px', marginBottom: '5px', fontSize: '1rem', color: '#333' }}>New user then</p>
          <button onClick={() => handleActionSelection('register')} style={chooseActionStyles.button}>
            Register
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

const chooseActionStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
    height: 'auto',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  header: {
    fontSize: '2.2rem',
    fontWeight: '600',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  button: {
    padding: '14px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0070f3',
    color: '#fff',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};
