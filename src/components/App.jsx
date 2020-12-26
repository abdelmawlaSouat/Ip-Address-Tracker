/**
 * App.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 10:48:01
 * Last modified  : 2020-12-26 12:04:29
 */

import { ThemeProvider, Typography } from '@material-ui/core'
import theme from '../theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Typography variant="h2">IP Adress Tracker</Typography>
			</div>
		</ThemeProvider>
	)
}

export default App
