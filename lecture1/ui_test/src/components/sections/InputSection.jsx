import { useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const VARIANTS = ['standard', 'outlined', 'filled'];

function InputSection() {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  const handleChange = (variant) => (event) => {
    setValues((prev) => ({ ...prev, [variant]: event.target.value }));
  };

  return (
    <SectionLayout id="input" number={3} title="Input">
      <Stack spacing={3}>
        {VARIANTS.map((variant) => (
          <Stack key={variant} spacing={1}>
            <TextField
              variant={variant}
              label={`${variant} 라벨`}
              placeholder={`${variant} 입력창입니다`}
              value={values[variant]}
              onChange={handleChange(variant)}
            />
            <Typography variant="body2" color="text.secondary">
              입력값: {values[variant]}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </SectionLayout>
  );
}

export default InputSection;
