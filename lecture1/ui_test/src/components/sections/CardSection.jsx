import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import SectionLayout from './SectionLayout.jsx';

const CARDS = [
  { id: 1, title: '첫 번째 카드', description: '카드는 관련된 정보를 한 덩어리로 묶어 보여줘요.' },
  { id: 2, title: '두 번째 카드', description: '마우스를 올리면 그림자가 진해지며 떠오르는 효과가 나요.' },
  { id: 3, title: '세 번째 카드', description: 'Grid를 쓰면 화면 크기에 맞춰 카드 배치가 바뀌어요.' },
];

function CardSection() {
  return (
    <SectionLayout id="card" number={10} title="Card">
      <Grid container spacing={3}>
        {CARDS.map(({ id, title, description }) => (
          <Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
            {/* 기본 elevation은 1, 호버하면 8로 바꿔서 떠오르는 느낌을 준다 */}
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 1,
                transition: 'box-shadow 0.3s, transform 0.3s',
                '&:hover': { boxShadow: 8, transform: 'translateY(-4px)' },
              }}
            >
              {/* 이미지 대신 테마 색을 쓴 자리표시 영역 */}
              <CardMedia component="div" sx={{ height: 120, bgcolor: 'primary.light' }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">자세히 보기</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}

export default CardSection;
