import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  attribution: {
    margin: theme.spacing(4),
  },
}));

export const Attribution = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
      <Container className={classes.attribution}>
          <Typography variant="body2" color="textSecondary" align="center">
              {t('Maintained by')}{' '}
              <Link href="https://1linesoft.com">1LineSoft (based on YoPass https://github.com/jhaals/yopass)</Link>
          </Typography>
      </Container>
  );
};
