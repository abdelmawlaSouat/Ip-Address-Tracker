/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 10:48:01
 * Last modified  : 2020-12-28 15:06:37
 */

import { Box, ThemeProvider, makeStyles } from '@material-ui/core'

import theme from '../theme'
import patternBg from '../images/pattern-bg.png'

import PatternBackground from './PatternBackground'
import IPAddressContainer from './IPAddressContainer'
import Map from './Map'

const useStyles = makeStyles({
	app: {
		height: '100vh',
	},
})

function App() {
	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.app}>
				<PatternBackground src={patternBg} />
				<IPAddressContainer />
				<Map />
			</Box>
		</ThemeProvider>
	)
}

export default App
