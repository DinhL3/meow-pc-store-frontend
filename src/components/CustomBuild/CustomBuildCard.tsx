import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import type { CustomBuild } from '../../data/customBuild.types';

interface CustomBuildCardProps {
  customBuild: CustomBuild;
}

const CustomBuildCard = ({ customBuild }: CustomBuildCardProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('fi') ? 'fi' : 'en';

  return (
    <Card
      sx={{
        maxWidth: 275,
        boxShadow: 'none',
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={customBuild.image}
        alt={customBuild.name}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography gutterBottom variant="body2" component="div" color="navy.main" mb={2}>
          "{customBuild.description[currentLang]}"
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
          {customBuild.tags.slice(0, 2).map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              variant="outlined"
              sx={{
                color: 'navy.main',
                borderColor: 'oceanBlue.main',
                borderWidth: 1,
                borderStyle: 'solid',
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomBuildCard;
