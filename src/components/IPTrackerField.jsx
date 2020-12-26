/**
 * IpTrackerField.jsx
 *
 * @summary short description for the file
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 12:08:36
 * Last modified  : 2020-12-26 20:12:28
 */

import { Box, Button, InputBase, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles((theme) => ({
	box: {
		position: 'relative',
	},
	btn: {
		height: '100%',
		position: 'absolute',
		right: '-5%',
		borderBottomRightRadius: '15px',
		borderTopRightRadius: '15px',
		background: 'hsl(0, 0%, 17%)',
		'&:hover': {
			background: 'hsl(0, 0%, 59%)',
		},
	},
	input: {
		background: 'white',
		padding: '0.5rem 1.5rem',
		borderRadius: '15px',
		width: '100vh',
		[theme.breakpoints.only('xs')]: {
			fontSize: '15px',
		},
	},
	icon: {
		color: 'white',
	},
}))

function IpTrackerField({ placeholder }) {
	const classes = useStyles()

	return (
		<Box className={classes.box} display="flex">
			<InputBase className={classes.input} placeholder={placeholder} />
			<Button className={classes.btn}>
				<NavigateNextIcon className={classes.icon} />
			</Button>
		</Box>
	)
}

IpTrackerField.propTypes = {
	placeholder: PropTypes.string.isRequired,
}

export default IpTrackerField
