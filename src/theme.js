/**
 * theme.js
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 11:43:48
 * Last modified  : 2020-12-26 11:50:06
 */

import { createMuiTheme } from '@material-ui/core/styles'
import Rubik from './fonts/Rubik-Regular.ttf'

const rubik = {
	fontFamily: 'Rubik',
	fontStyle: 'normal',
	src: `
    local('Rubik'), url(${Rubik})
  `,
}

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Rubik Arial Roboto',
		fontSize: 18,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [rubik],
			},
		},
	},
})

export default theme
