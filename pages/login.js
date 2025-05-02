import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const { role } = router.query;

  return (
    <div style={loginStyles.container}>
      <div style={loginStyles.card}>
        <h1 style={loginStyles.header}>Login as {role}</h1>
        <form action="http://localhost:3000/auth/login" method="POST" style={loginStyles.form}>
          <input type="email" name="email" placeholder="Email" required style={loginStyles.input} />
          <input type="text" name="fullName" placeholder="Full Name" required style={loginStyles.input} />
          <input type="password" name="password" placeholder="Password" required style={loginStyles.input} />
          <button type="submit" style={loginStyles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const loginStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '350px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px 0',
    marginTop: '15px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: 'white',
    transition: 'background-color 0.3s ease',
  },
};
