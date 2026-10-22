import { Button, Stack } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

function ButtonSection() {
  const handleClick = (variant, color) => {
    alert(`${variant} / ${color} 버튼을 눌렀어요!`);
  };

  return (
    <SectionLayout id="button" number={2} title="Button">
      <Stack spacing={2}>
        {VARIANTS.map((variant) => (
          <Stack key={variant} direction="row" spacing={2}>
            {COLORS.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() => handleClick(variant, color)}
              >
                {variant} {color}
              </Button>
            ))}
          </Stack>
        ))}
      </Stack>
    </SectionLayout>
  );
}

export default ButtonSection;
