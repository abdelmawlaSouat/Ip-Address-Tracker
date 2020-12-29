/**
 * IPAdressData.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 12:15:55
 * Last modified  : 2020-12-29 18:01:07
 */

import { Box, Card, Typography, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  ipAddressDataCard: { borderRadius: '15px' },
  ipAddressDataBox: {
    display: 'flex',
    padding: '1rem',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      padding: '0',
    },
  },
  item: {
    margin: '2.7rem',
    paddingLeft: '2.2rem',
    [theme.breakpoints.only('xs')]: {
      margin: '1rem 1.5rem',
      paddingLeft: '0',
      textAlign: 'center',
    },
  },
  borderLeft: {
    borderLeft: '1px solid lightgrey',
    [theme.breakpoints.only('xs')]: { borderLeft: '0' },
  },
  categorie: {
    color: 'grey',
    fontSize: '0.75rem',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },
  data: {
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.only('xs')]: { fontSize: '1.5rem' },
  },
}))

function IPAdressData({ ipAddress, location, timezone, isp }) {
  const classes = useStyles()

  return (
    <Card className={classes.ipAddressDataCard}>
      <Box className={classes.ipAddressDataBox}>
        <Box className={classes.item}>
          <Typography className={classes.categorie}>IP ADDRESS</Typography>
          <Typography className={classes.data}>{ipAddress}</Typography>
        </Box>

        <Box className={clsx(classes.borderLeft, classes.item)}>
          <Typography className={classes.categorie}>LOCATION</Typography>
          <Typography className={classes.data}>
            {`${location.city}, ${location.postalCode}`}
          </Typography>
        </Box>

        <Box className={clsx(classes.borderLeft, classes.item)}>
          <Typography className={classes.categorie}>TIMEZONE</Typography>
          <Typography className={classes.data}>{`UTC ${timezone}`}</Typography>
        </Box>

        <Box className={clsx(classes.borderLeft, classes.item)}>
          <Typography className={classes.categorie}>ISP</Typography>
          <Typography className={classes.data}>{isp}</Typography>
        </Box>
      </Box>
    </Card>
  )
}

IPAdressData.propTypes = {
  ipAddress: PropTypes.number.isRequired,
  isp: PropTypes.number.isRequired,
  timezone: PropTypes.number.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    postalCode: PropTypes.string,
  }).isRequired,
}

export default IPAdressData
