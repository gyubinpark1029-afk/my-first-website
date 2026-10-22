import { Button, Stack } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

// 섹션 작성 예시: 이 파일을 복사해서 새 섹션을 만든다
function SampleSection() {
  return (
    <SectionLayout id="sample" number={1} title="샘플 섹션">
      <Stack direction="row" spacing={2}>
        <Button variant="contained">주요 버튼</Button>
        <Button variant="outlined">보조 버튼</Button>
      </Stack>
    </SectionLayout>
  );
}

export default SampleSection;
