import { Typography } from '@mui/material';

function SectionTitle({ number, children }) {
  return (
    <Typography variant="h4" component="h2" gutterBottom>
      {number}. {children}
    </Typography>
  );
}

export default SectionTitle;
