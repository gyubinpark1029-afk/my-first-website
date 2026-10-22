import { useState } from 'react';
import { Box, Button, Fade, Grid, Grow, Paper, Slide, Stack } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import SectionLayout from './SectionLayout.jsx';

// CSS 애니메이션: 커졌다 작아지기를 계속 반복한다
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
`;

const DEMOS = ['fade', 'grow', 'slide', 'combo'];
const DEMO_LABELS = {
  fade: 'Fade',
  grow: 'Grow',
  slide: 'Slide',
  combo: 'Grow + CSS',
};

function AnimationSection() {
  const [visible, setVisible] = useState({ fade: true, grow: true, slide: true, combo: true });

  const handleToggle = (demo) => {
    setVisible((prev) => ({ ...prev, [demo]: !prev[demo] }));
  };

  const renderBox = (sx) => (
    <Paper sx={{ width: 96, height: 96, bgcolor: 'primary.main', ...sx }} />
  );

  const animations = {
    fade: (
      <Fade in={visible.fade} timeout={600}>
        {renderBox()}
      </Fade>
    ),
    grow: (
      <Grow in={visible.grow} timeout={600}>
        {renderBox()}
      </Grow>
    ),
    // Slide가 영역 밖으로 밀려난 부분은 아래 Box의 overflow: hidden이 가려 준다
    slide: (
      <Slide in={visible.slide} direction="left" timeout={600} mountOnEnter unmountOnExit>
        {renderBox()}
      </Slide>
    ),
    // 같은 요소에 둘 다 걸면 CSS의 transform이 Grow의 transform을 덮어쓰므로 겹으로 나눈다
    combo: (
      <Grow in={visible.combo} timeout={600}>
        <Box sx={{ width: 96, height: 96 }}>
          {renderBox({ bgcolor: 'secondary.main', animation: `${pulse} 1.2s infinite` })}
        </Box>
      </Grow>
    ),
  };

  return (
    <SectionLayout id="animation" number={13} title="Animation">
      <Grid container spacing={3}>
        {DEMOS.map((demo) => (
          <Grid key={demo} size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
              <Button variant="outlined" onClick={() => handleToggle(demo)}>
                {DEMO_LABELS[demo]} {visible[demo] ? '숨기기' : '보이기'}
              </Button>
              <Box sx={{ width: '100%', height: 112, overflow: 'hidden' }}>{animations[demo]}</Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}

export default AnimationSection;
