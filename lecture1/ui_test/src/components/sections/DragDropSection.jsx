import { useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const ZONES = [
  { id: 'todo', title: '할 일' },
  { id: 'done', title: '완료' },
];

const INITIAL_ITEMS = [
  { id: 1, name: '장보기', zone: 'todo' },
  { id: 2, name: '운동하기', zone: 'todo' },
  { id: 3, name: '책 읽기', zone: 'todo' },
  { id: 4, name: '청소하기', zone: 'todo' },
];

function DragDropSection() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [draggingId, setDraggingId] = useState(null);
  const [overZone, setOverZone] = useState(null);

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData('text/plain', String(id));
    setDraggingId(id);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    setOverZone(null);
  };

  // dragover에서 preventDefault를 해야 이 영역이 드롭을 받을 수 있다
  const handleDragOver = (event, zoneId) => {
    event.preventDefault();
    setOverZone(zoneId);
  };

  const handleDrop = (event, zoneId) => {
    event.preventDefault();
    const id = Number(event.dataTransfer.getData('text/plain'));
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, zone: zoneId } : item)));
    handleDragEnd();
  };

  return (
    <SectionLayout id="drag-drop" number={11} title="Drag & Drop">
      <Grid container spacing={3}>
        {ZONES.map(({ id: zoneId, title }) => (
          <Grid key={zoneId} size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle1" gutterBottom>
              {title}
            </Typography>
            <Box
              onDragOver={(event) => handleDragOver(event, zoneId)}
              onDragLeave={() => setOverZone(null)}
              onDrop={(event) => handleDrop(event, zoneId)}
              sx={{
                minHeight: 240,
                p: 2,
                borderRadius: 1,
                border: 2,
                borderStyle: 'dashed',
                borderColor: overZone === zoneId ? 'primary.main' : 'divider',
                bgcolor: overZone === zoneId ? 'action.hover' : 'transparent',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
            >
              {items
                .filter((item) => item.zone === zoneId)
                .map((item) => (
                  <Paper
                    key={item.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, item.id)}
                    onDragEnd={handleDragEnd}
                    sx={{
                      p: 2,
                      mb: 1,
                      cursor: 'grab',
                      opacity: draggingId === item.id ? 0.4 : 1,
                    }}
                  >
                    {item.name}
                  </Paper>
                ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}

export default DragDropSection;
