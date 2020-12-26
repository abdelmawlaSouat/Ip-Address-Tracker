/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 10:48:01
 * Last modified  : 2020-12-26 21:17:14
 */

import {
	Box,
	ThemeProvider,
	Typography,
	makeStyles,
	Grid,
} from '@material-ui/core'
import theme from '../theme'
import IPAdressData from './IPAdressData'
import IpTrackerField from './IPTrackerField'
import patternBg from '../images/pattern-bg.png'

const useStyles = makeStyles({
	ipAddressTracker: {
		position: 'absolute',
		top: '5vh',
	},
	patternBg: {
		width: '100%',
		height: '38vh',
	},
	title: {
		color: 'white',
	},
})

function App() {
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<Box className="App">
				<img
					className={classes.patternBg}
					src={patternBg}
					alt="Pattern Background"
				/>
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
						<IPAdressData />
					</Grid>
				</Grid>
			</Box>
		</ThemeProvider>
	)
}

export default App
