import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

const SKILLS = [
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'TypeScript', level: 60 },
  { name: 'Node.js', level: 65 },
  { name: 'CSS / MUI', level: 70 },
  { name: 'Git / GitHub', level: 75 },
]

const TAGS = ['React', 'TypeScript', 'Next.js', 'Node.js', 'MUI', 'Git', 'Figma', 'Python']

export default function SkillSection() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F2EDE8', textAlign: 'center' }}
    >
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{ color: '#8B1A2F', letterSpacing: 4, fontSize: '0.8rem', mb: 1, display: 'block' }}
        >
          SKILL TREE
        </Typography>

        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 700, mb: 2 }}
        >
          여기는 Skill Tree 섹션입니다.
        </Typography>

        <Divider sx={{ width: 60, height: 3, bgcolor: '#8B1A2F', mx: 'auto', my: 3, border: 'none' }} />

        <Typography variant="body1" sx={{ color: '#555555', mb: 6 }}>
          기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {SKILLS.map(skill => (
            <Grid item xs={12} sm={6} key={skill.name}>
              <Box
                sx={{
                  bgcolor: '#F7F3EF',
                  border: '1px solid #D9D0C8',
                  borderRadius: 2,
                  p: 2.5,
                  textAlign: 'left',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" fontWeight={600} color="#1A1A1A">
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="#8B1A2F" fontWeight={700}>
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: '#D9D0C8',
                    '& .MuiLinearProgress-bar': { bgcolor: '#8B1A2F', borderRadius: 4 },
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
          {TAGS.map(tag => (
            <Chip
              key={tag}
              label={tag}
              sx={{
                bgcolor: '#1C0A14',
                color: '#F2EDE8',
                fontWeight: 500,
                '&:hover': { bgcolor: '#6B1D35' },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
