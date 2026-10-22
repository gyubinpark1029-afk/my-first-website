import { Box, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

// 요청하신 네비게이션 배경색. 테마에 없는 색이라 여기에서만 따로 정해 둔다
const NAV_BG_COLOR = '#2d3748';
const MENUS = ['홈', '소개', '상품', '연락처', '설정'];

function FlexNavigationSection() {
  return (
    <SectionLayout id="flex-navigation" number={18} title="Flex Navigation">
      {/* flex + space-between: 로고는 왼쪽 끝, 메뉴 묶음은 오른쪽 끝에 놓인다 */}
      <Box
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 60,
          px: 3,
          bgcolor: NAV_BG_COLOR,
        }}
      >
        <Box>
          <Typography sx={{ color: 'common.white', fontSize: 20, fontWeight: 'bold' }}>
            MyWebsite
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '15px' }}>
          {MENUS.map((menu) => (
            <Typography
              key={menu}
              component="a"
              href="#flex-navigation"
              sx={{
                color: 'grey.400',
                fontSize: 16,
                textDecoration: 'none',
                transition: 'color 0.2s',
                '&:hover': { color: 'common.white' },
              }}
            >
              {menu}
            </Typography>
          ))}
        </Box>
      </Box>
    </SectionLayout>
  );
}

export default FlexNavigationSection;
