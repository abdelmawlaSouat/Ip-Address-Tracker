/**
 * IPAdressData.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 12:15:55
 * Last modified  : 2020-12-26 21:19:30
 */

import { Box, Card, Typography, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
	ipAddressDataCard: { borderRadius: '15px' },
	ipAddressDataBox: {
		display: 'flex',
		padding: '1rem',
		[theme.breakpoints.only('xs')]: {
			flexDirection: 'column',
			padding: '0',
		},
	},
	item: {
		margin: '2.7rem',
		paddingLeft: '2.2rem',
		[theme.breakpoints.only('xs')]: {
			margin: '1rem 1.5rem',
			paddingLeft: '0',
			textAlign: 'center',
		},
	},
	borderLeft: {
		borderLeft: '1px solid lightgrey',
		[theme.breakpoints.only('xs')]: { borderLeft: '0' },
	},
	categorie: {
		color: 'grey',
		fontSize: '0.75rem',
		letterSpacing: '2px',
		fontWeight: 'bold',
	},
	data: {
		fontSize: '2rem',
		fontWeight: 'bold',
		[theme.breakpoints.only('xs')]: { fontSize: '1.5rem' },
	},
}))

function IPAdressData() {
	const classes = useStyles()

	return (
		<Card className={classes.ipAddressDataCard}>
			<Box className={classes.ipAddressDataBox}>
				<Box className={classes.item}>
					<Typography className={classes.categorie}>IP ADDRESS</Typography>
					<Typography className={classes.data}>192.212.174.101</Typography>
				</Box>

				<Box className={clsx(classes.borderLeft, classes.item)}>
					<Typography className={classes.categorie}>LOCATION</Typography>
					<Typography className={classes.data}>Brooklyn, NY</Typography>
				</Box>

				<Box className={clsx(classes.borderLeft, classes.item)}>
					<Typography className={classes.categorie}>TIMEZONE</Typography>
					<Typography className={classes.data}>UTC -05.00</Typography>
				</Box>

				<Box className={clsx(classes.borderLeft, classes.item)}>
					<Typography className={classes.categorie}>ISP</Typography>
					<Typography className={classes.data}>SpaceX</Typography>
				</Box>
			</Box>
		</Card>
	)
}
export default IPAdressData
