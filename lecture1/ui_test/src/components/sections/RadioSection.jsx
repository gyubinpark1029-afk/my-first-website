import { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const SIZES = ['Small', 'Medium', 'Large', 'Extra Large'];

function RadioSection() {
  const [size, setSize] = useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <SectionLayout id="radio" number={7} title="Radio">
      <FormControl>
        <FormLabel id="size-radio-label">사이즈 선택</FormLabel>
        <RadioGroup aria-labelledby="size-radio-label" value={size} onChange={handleChange}>
          {SIZES.map((item) => (
            <FormControlLabel key={item} value={item} label={item} control={<Radio />} />
          ))}
        </RadioGroup>
      </FormControl>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        선택한 옵션: {size || '아직 선택하지 않았어요'}
      </Typography>
    </SectionLayout>
  );
}

export default RadioSection;
