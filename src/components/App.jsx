/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 10:48:01
 * Last modified  : 2020-12-29 21:14:57
 */

import { useState, useEffect } from 'react'
import { Box, ThemeProvider } from '@material-ui/core'
import axios from 'axios'
import theme from '../theme'
import patternBg from '../images/pattern-bg.png'
import PatternBackground from './PatternBackground'
import IPAddressContainer from './IPAddressContainer'
import Map from './Map'

const API_KEY = process.env.REACT_APP_IPIFY_KEY

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ipAddress, setIpAddress] = useState('Unknown')
  const [isp, setIsp] = useState('Unknown')
  const [timezone, setTimeZone] = useState('Unknown')
  const [zoom, setZoom] = useState(1)
  const [location, setLocation] = useState({
    city: 'Unknown',
    postalCode: 'Unknown',
  })

  function getLocationData(ipAddr) {
    axios
      .get(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipAddr}`)
      .then((response) => {
        const { ip, location: loc, isp: ispValue } = response.data

        setLocation({ city: loc.city, postalCode: loc.postalCode })
        setPosition({ x: loc.lng, y: loc.lat })
        setTimeZone(loc.timezone)
        setIpAddress(ip)
        setIsp(ispValue)
        setZoom(16)
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(() => {
        axios
          .get('https://geoip-db.com/json/')
          .then((response) => response.data.IPv4)
          .then((ipAddr) => getLocationData(ipAddr))
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err))
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box className="App" style={{ height: '100vh' }}>
        <PatternBackground src={patternBg} />
        <IPAddressContainer
          updateLocalisation={(ip) => getLocationData(ip)}
          ipAddress={ipAddress}
          location={location}
          timezone={timezone}
          isp={isp}
        />
        <Map
          position={position}
          handlePosition={() => setPosition(position)}
          handleZoom={() => setZoom(zoom)}
          zoom={zoom}
        />
      </Box>
    </ThemeProvider>
  )
}

export default App
