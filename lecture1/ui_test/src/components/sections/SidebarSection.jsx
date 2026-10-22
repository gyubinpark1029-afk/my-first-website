import { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const DRAWER_WIDTH = 240;

// href의 #값은 각 섹션의 id라서, 누르면 화면의 해당 섹션으로 이동한다
const LINKS = [
  { label: 'Button', href: '#button' },
  { label: 'Input', href: '#input' },
  { label: 'Card', href: '#card' },
  { label: 'Animation', href: '#animation' },
  { label: 'Menu', href: '#menu' },
];

function SidebarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchor] = useState('left');

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  // 선택을 해제하면 null이 오므로, 그 경우에는 기존 위치를 유지한다
  const handleAnchorChange = (event, newAnchor) => {
    if (newAnchor) setAnchor(newAnchor);
  };

  return (
    <SectionLayout id="sidebar" number={15} title="Sidebar">
      <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
        <ToggleButtonGroup exclusive size="small" value={anchor} onChange={handleAnchorChange}>
          <ToggleButton value="left">왼쪽</ToggleButton>
          <ToggleButton value="right">오른쪽</ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" onClick={handleToggle}>
          사이드바 열기
        </Button>
        <Typography variant="body2" color="text.secondary">
          현재 위치: {anchor === 'left' ? '왼쪽' : '오른쪽'}
        </Typography>
      </Stack>

      <Drawer anchor={anchor} open={isOpen} onClose={handleClose}>
        <Box sx={{ width: DRAWER_WIDTH }} role="navigation">
          <Typography variant="h6" sx={{ p: 2 }}>
            메뉴
          </Typography>
          <List>
            {LINKS.map(({ label, href }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton component="a" href={href} onClick={handleClose}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </SectionLayout>
  );
}

export default SidebarSection;
