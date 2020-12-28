/**
 * PatternBackground.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-28 14:25:17
 * Last modified  : 2020-12-28 15:05:42
 */

import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	root: {
		height: '38vh',
	},
})

function PatternBackground({ src }) {
	const classes = useStyles()

	return (
		<img
			className={clsx('Pattern-background', classes.root)}
			src={src}
			alt="Pattern Background"
			width="100%"
		/>
	)
}

PatternBackground.propTypes = {
	src: PropTypes.string.isRequired,
}

export default PatternBackground
