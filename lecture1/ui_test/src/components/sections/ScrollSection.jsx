import { useRef, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SectionLayout from './SectionLayout.jsx';

const SHOW_BUTTON_OFFSET = 100;
const ITEM_COUNT = 30;
const ITEMS = Array.from({ length: ITEM_COUNT }, (_, index) => `${index + 1}번째 항목`);

function ScrollSection() {
  const scrollRef = useRef(null);
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

  const handleScroll = (event) => {
    setIsTopButtonVisible(event.currentTarget.scrollTop > SHOW_BUTTON_OFFSET);
  };

  const handleScrollTop = () => {
    scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SectionLayout id="scroll" number={12} title="Scroll">
      {/* 버튼이 스크롤 내용과 함께 움직이지 않도록 스크롤 영역 바깥의 relative 틀에 둔다 */}
      <Box sx={{ position: 'relative' }}>
        <Paper
          ref={scrollRef}
          variant="outlined"
          onScroll={handleScroll}
          sx={{ height: 300, overflowY: 'auto', p: 2 }}
        >
          {ITEMS.map((item) => (
            <Typography key={item} sx={{ py: 1 }}>
              {item}
            </Typography>
          ))}
        </Paper>
        {isTopButtonVisible && (
          <Button
            variant="contained"
            size="small"
            startIcon={<KeyboardArrowUpIcon />}
            onClick={handleScrollTop}
            sx={{ position: 'absolute', right: 24, bottom: 16 }}
          >
            Top
          </Button>
        )}
      </Box>
    </SectionLayout>
  );
}

export default ScrollSection;
