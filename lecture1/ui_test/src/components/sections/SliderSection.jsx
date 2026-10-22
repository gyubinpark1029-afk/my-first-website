import { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const MARKS = [0, 25, 50, 75, 100].map((value) => ({ value, label: `${value}` }));

function SliderSection() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SectionLayout id="slider" number={8} title="Slider">
      <Box sx={{ maxWidth: 480, px: 2 }}>
        <Slider
          aria-label="값 선택"
          value={value}
          onChange={handleChange}
          min={0}
          max={100}
          step={5}
          marks={MARKS}
          valueLabelDisplay="auto"
        />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        현재 값: {value}
      </Typography>
    </SectionLayout>
  );
}

export default SliderSection;
