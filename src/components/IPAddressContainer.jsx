/**
 * IPAddressContainer.jsx
 *
 * @summary short description for the file
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-28 14:42:04
 * Last modified  : 2020-12-29 19:59:11
 */

import { Typography, makeStyles, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import IPAdressData from './IPAdressData'
import IpTrackerField from './IPTrackerField'

const useStyles = makeStyles((theme) => ({
  ipAddressTracker: {
    position: 'absolute',
    zIndex: '9999',
    textAlign: 'center',
    top: '5vh',
    [theme.breakpoints.only('xs')]: { top: '1vh' },
  },
  title: {
    color: 'white',
    [theme.breakpoints.only('xs')]: {
      fontSize: '2rem',
    },
  },
}))

function IPAddressContainer({
  ipAddress,
  location,
  timezone,
  isp,
  updateLocalisation,
}) {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.ipAddressTracker}
      direction="column"
      spacing={5}
    >
      <Grid item>
        <Typography className={classes.title} variant="h4">
          IP Address Tracker
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <IpTrackerField
          placeholder="Search for any IP address or domain"
          ipAddress={ipAddress}
          updateLocalisation={updateLocalisation}
        />
      </Grid>
      <Grid item xs={12}>
        <IPAdressData
          ipAddress={ipAddress}
          location={location}
          timezone={timezone}
          isp={isp}
        />
      </Grid>
    </Grid>
  )
}

IPAddressContainer.propTypes = {
  updateLocalisation: PropTypes.func.isRequired,
  ipAddress: PropTypes.string.isRequired,
  isp: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    postalCode: PropTypes.string,
  }).isRequired,
}

export default IPAddressContainer
