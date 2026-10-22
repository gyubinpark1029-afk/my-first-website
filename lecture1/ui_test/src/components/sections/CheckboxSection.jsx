import { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const ITEMS = ['독서', '운동', '여행', '요리'];

function CheckboxSection() {
  const [checkedItems, setCheckedItems] = useState([]);

  const isAllChecked = checkedItems.length === ITEMS.length;
  // 일부만 선택된 상태에서는 전체 체크박스에 "-" 모양을 보여준다
  const isIndeterminate = checkedItems.length > 0 && !isAllChecked;

  const handleToggleAll = () => {
    setCheckedItems(isAllChecked ? [] : ITEMS);
  };

  const handleToggleItem = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((value) => value !== item) : [...prev, item],
    );
  };

  return (
    <SectionLayout id="checkbox" number={6} title="Checkbox">
      <FormGroup>
        <FormControlLabel
          label="전체 선택"
          control={
            <Checkbox
              checked={isAllChecked}
              indeterminate={isIndeterminate}
              onChange={handleToggleAll}
            />
          }
        />
        {ITEMS.map((item) => (
          <FormControlLabel
            key={item}
            label={item}
            sx={{ ml: 2 }}
            control={
              <Checkbox
                checked={checkedItems.includes(item)}
                onChange={() => handleToggleItem(item)}
              />
            }
          />
        ))}
      </FormGroup>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        선택된 항목: {checkedItems.length} / {ITEMS.length}개
      </Typography>
    </SectionLayout>
  );
}

export default CheckboxSection;
