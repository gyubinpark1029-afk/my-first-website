import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Box, Button, Stack, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

// 이미지 대신 테마 색을 쓴 슬라이드. 실제 이미지는 src를 가진 img로 바꾸면 된다
const SLIDES = [
  { title: '첫 번째 슬라이드', bgcolor: 'primary.main' },
  { title: '두 번째 슬라이드', bgcolor: 'secondary.main' },
  { title: '세 번째 슬라이드', bgcolor: 'error.main' },
  { title: '네 번째 슬라이드', bgcolor: 'success.main' },
];
const LAST_INDEX = SLIDES.length - 1;

function SwipeSection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setIndex((prev) => Math.min(prev + 1, LAST_INDEX));

  // 왼쪽으로 쓸면 다음, 오른쪽으로 쓸면 이전 슬라이드. trackMouse로 마우스 드래그도 인식한다
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <SectionLayout id="swipe" number={17} title="Swipe">
      <Box {...swipeHandlers} sx={{ overflow: 'hidden', borderRadius: 1, userSelect: 'none' }}>
        <Box
          sx={{
            display: 'flex',
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 0.4s',
          }}
        >
          {SLIDES.map(({ title, bgcolor }) => (
            <Box
              key={title}
              sx={{
                flex: '0 0 100%',
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor,
                color: 'common.white',
              }}
            >
              <Typography variant="h5">{title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Stack direction="row" spacing={2} sx={{ mt: 2, alignItems: 'center' }}>
        <Button variant="outlined" onClick={handlePrev} disabled={index === 0}>
          이전
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={index === LAST_INDEX}>
          다음
        </Button>
        <Typography variant="body2" color="text.secondary">
          {index + 1} / {SLIDES.length}
        </Typography>
      </Stack>
    </SectionLayout>
  );
}

export default SwipeSection;
