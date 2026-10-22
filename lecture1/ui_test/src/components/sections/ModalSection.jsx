import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SectionLayout from './SectionLayout.jsx';

function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleConfirm = () => {
    alert('확인을 눌렀어요!');
    handleClose();
  };

  return (
    <SectionLayout id="modal" number={9} title="Modal">
      <Button variant="contained" onClick={handleOpen}>
        모달 열기
      </Button>

      {/* onClose는 배경 클릭과 ESC 키를 눌렀을 때도 호출된다 */}
      <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle sx={{ pr: 7 }}>
          안내
          <IconButton
            aria-label="닫기"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            이 작업을 진행할까요? 확인을 누르면 진행하고, 취소를 누르면 창만 닫혀요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" onClick={handleConfirm}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </SectionLayout>
  );
}

export default ModalSection;
