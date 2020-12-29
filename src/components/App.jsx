/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 10:48:01
 * Last modified  : 2020-12-28 21:14:28
 */

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, ThemeProvider, makeStyles } from '@material-ui/core'

import theme from '../theme'
import patternBg from '../images/pattern-bg.png'

import PatternBackground from './PatternBackground'
import IPAddressContainer from './IPAddressContainer'
import Map from './Map'

const useStyles = makeStyles({
	app: { height: '100vh' },
})

function App() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	})
	const [ipAddress, setIpAddress] = useState('')
	const [location, setLocation] = useState({})
	const [isp, setIsp] = useState('')
	const [zoom, setZoom] = useState(1)
	const classes = useStyles()

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(() => {
				axios
					.get('https://geoip-db.com/json/')
					.then((json) => json.data.IPv4)
					.then((ipAddr) => {
						axios
							.get(
								`https://geo.ipify.org/api/v1?apiKey=at_PhQZKOdzMRSwes9SIULzywxzAwVeN&ipAddress=${ipAddr}`
							)
							.then((json) => {
								const { ip, location: loc, isp: ispValue } = json.data

								console.log(json.data)
								setIpAddress(ip)
								setPosition({ x: loc.lng, y: loc.lat })
								setLocation({
									city: loc.city,
									postalCode: loc.postalCode,
									timezone: loc.timezone,
								})
								setIsp(ispValue)
							})
							.catch((err) => console.log(err))
					})
					.catch((err) => console.log(err))
			})
		}
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.app}>
				{`${position.x} - ${position.y} $$$ ip : ${ipAddress}  $`}
				{`isp: ${isp} - location: ${location} `}
				<PatternBackground src={patternBg} />
				<IPAddressContainer />
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
