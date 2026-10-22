import { useState } from 'react';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import SectionLayout from './SectionLayout.jsx';

const MENU_ITEMS = [
  { label: '홈', Icon: HomeIcon },
  { label: '내 프로필', Icon: PersonIcon },
  { label: '설정', Icon: SettingsIcon },
  { label: '알림', Icon: NotificationsIcon },
  { label: '도움말', Icon: HelpIcon },
  { label: '로그아웃', Icon: LogoutIcon },
];

function MenuSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState('');

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (label) => {
    setSelected(label);
    handleClose();
  };

  return (
    <SectionLayout id="menu" number={14} title="Menu">
      <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
        <Button variant="contained" onClick={handleOpen}>
          메뉴 열기
        </Button>
        {/* anchorEl이 null이면 닫혀 있고, 버튼이 들어 있으면 그 버튼 아래에 열린다 */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {MENU_ITEMS.map(({ label, Icon }) => (
            <MenuItem key={label} onClick={() => handleSelect(label)}>
              <ListItemIcon>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
        <Typography variant="body2" color="text.secondary">
          선택한 메뉴: {selected || '아직 선택하지 않았어요'}
        </Typography>
      </Stack>
    </SectionLayout>
  );
}

export default MenuSection;
