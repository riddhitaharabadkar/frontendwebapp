// pages/host/add.js

export default function AddHostPage() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1>Welcome to the Host Add Page</h1>
        <p>This is where sellers can add their listings.</p>
      </div>
    </div>
  );
}

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  justifyContent: 'center',
  fontFamily: 'Arial',
  backgroundColor: '#f0f0f0',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '80px',
  borderRadius: '15px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  width: '800px',
  textAlign: 'center',
};
  