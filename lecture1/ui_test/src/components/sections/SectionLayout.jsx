import { Box, Divider } from '@mui/material';
import SectionTitle from '../ui/SectionTitle.jsx';

// 모든 섹션이 같은 제목/간격을 갖도록 감싸 주는 공통 틀
function SectionLayout({ id, number, title, children }) {
  return (
    <Box component="section" id={id} sx={{ py: 5 }}>
      <SectionTitle number={number}>{title}</SectionTitle>
      <Box sx={{ mt: 3 }}>{children}</Box>
      <Divider sx={{ mt: 5 }} />
    </Box>
  );
}

export default SectionLayout;
