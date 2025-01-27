import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  makeStyles,
  Link,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
  logo: {
    verticalAlign: 'middle',
    paddingLeft: '5px',
  },
}));

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isOnUploadPage = location.pathname.includes('upload');
  const base = process.env.PUBLIC_URL || '';
  const home = base + '/';
  const upload = base + '/upload';
  const classes = useStyles();
  return (
      <AppBar position="static" color="transparent" className={classes.appBar}>
          <Toolbar>
              <Link href={home} color="inherit" underline="none">
                  <Typography variant="h6" component="div">
                      <img
                          className={classes.logo}
                          height="60"
                          alt=""
                          src="1LineSoft-Logo.png"
                      />
                  </Typography>
              </Link>
              <Box
                  sx={{
                      marginLeft: 'auto',
                  }}
              >
                  <Button
                      component={RouterLink}
                      to={isOnUploadPage ? home : upload}
                      variant="contained"
                      color="primary"
                  >
                      {isOnUploadPage ? t('Home') : t('Upload')}
                  </Button>
              </Box>
          </Toolbar>
      </AppBar>
  );
};
