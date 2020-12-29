/**
 * IPAddressContainer.jsx
 *
 * @summary short description for the file
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-28 14:42:04
 * Last modified  : 2020-12-29 17:48:43
 */

import { Typography, makeStyles, Grid } from '@material-ui/core'

import IPAdressData from './IPAdressData'
import IpTrackerField from './IPTrackerField'

const useStyles = makeStyles((theme) => ({
  ipAddressTracker: {
    position: 'absolute',
    zIndex: '9999',
    top: '5vh',
    [theme.breakpoints.only('xs')]: {
      top: '1vh',
    },
  },
  title: {
    color: 'white',
  },
}))

function IPAddressContainer({ ipAddress, location, timezone, isp }) {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.ipAddressTracker}
      direction="column"
      spacing={5}
      alignItems="center"
    >
      <Grid item>
        <Typography className={classes.title} variant="h4">
          IP Address Tracker
        </Typography>
      </Grid>
      <Grid item xs={10} sm={5}>
        <IpTrackerField placeholder="Search for any IP address or domain" />
      </Grid>
      <Grid item xs={10}>
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

export default IPAddressContainer
