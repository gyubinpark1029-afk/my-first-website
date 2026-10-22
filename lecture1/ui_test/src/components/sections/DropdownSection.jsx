import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const FRUITS = ['사과', '바나나', '포도', '딸기', '오렌지', '수박'];

function DropdownSection() {
  const [fruit, setFruit] = useState('');

  const handleChange = (event) => {
    setFruit(event.target.value);
  };

  return (
    <SectionLayout id="dropdown" number={5} title="Dropdown">
      <Stack spacing={2} sx={{ maxWidth: 320 }}>
        <FormControl fullWidth>
          <InputLabel id="fruit-select-label">좋아하는 과일</InputLabel>
          <Select
            labelId="fruit-select-label"
            label="좋아하는 과일"
            value={fruit}
            onChange={handleChange}
          >
            {FRUITS.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="body2" color="text.secondary">
          선택한 값: {fruit || '아직 선택하지 않았어요'}
        </Typography>
      </Stack>
    </SectionLayout>
  );
}

export default DropdownSection;
