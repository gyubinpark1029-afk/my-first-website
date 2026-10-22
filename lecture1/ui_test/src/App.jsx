import { Container, Typography } from '@mui/material';
import sections from './components/sections';

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h1" gutterBottom>
        UI Test
      </Typography>
      {sections.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </Container>
  );
}

export default App;
