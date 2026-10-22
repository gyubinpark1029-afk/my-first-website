import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SectionLayout from './SectionLayout.jsx';

const MENUS = ['홈', '소개', '서비스', '연락처'];

function NavigationSection() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (menuName) => {
    setAnchorEl(null);
    alert(`${menuName} 메뉴를 눌렀어요!`);
  };

  return (
    <SectionLayout id="navigation" number={4} title="Navigation">
      {/* 섹션 안에서만 보이도록 static으로 둔다 (fixed면 화면 맨 위에 붙어버림) */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            로고
          </Typography>

          {/* 화면이 작으면(sm 미만) 햄버거 버튼만 보인다 */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="메뉴 열기"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {MENUS.map((menu) => (
                <MenuItem key={menu} onClick={() => handleMenuClick(menu)}>
                  {menu}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 화면이 크면(sm 이상) 메뉴를 버튼으로 펼쳐서 보여준다 */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {MENUS.map((menu) => (
              <Button key={menu} color="inherit" onClick={() => handleMenuClick(menu)}>
                {menu}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </SectionLayout>
  );
}

export default NavigationSection;
