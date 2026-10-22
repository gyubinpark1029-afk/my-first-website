import { ButtonBase, Grid, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

// 효과마다 호버했을 때 바뀌는 스타일(hover)만 다르게 둔다
const EFFECTS = [
  { label: '색상 변화', hover: { bgcolor: 'primary.main', color: 'primary.contrastText' } },
  { label: '크기 확대', hover: { transform: 'scale(1.08)' } },
  { label: '그림자', hover: { boxShadow: 8 } },
  { label: '위로 떠오르기', hover: { transform: 'translateY(-8px)', boxShadow: 4 } },
  { label: '회전', hover: { transform: 'rotate(-4deg)' } },
  { label: '테두리 강조', hover: { borderColor: 'secondary.main', color: 'secondary.main' } },
];

function HoverSection() {
  return (
    <SectionLayout id="hover" number={16} title="Hover">
      <Grid container spacing={3}>
        {EFFECTS.map(({ label, hover }) => (
          <Grid key={label} size={{ xs: 12, sm: 6, md: 4 }}>
            <ButtonBase
              sx={{
                width: '100%',
                height: 96,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
                // 효과가 부드럽게 바뀌도록 transition을 모든 카드에 준다
                transition: 'all 0.3s',
                '&:hover': hover,
              }}
            >
              <Typography variant="subtitle1">{label}</Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}

export default HoverSection;
