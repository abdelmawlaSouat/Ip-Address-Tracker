/**
 * Map.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-28 09:47:22
 * Last modified  : 2020-12-28 14:21:23
 */

import { useState, useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWJkZWxtYXdsYS1zIiwiYSI6ImNrajhhYTZjNDFtdXgycm5xdWhla3BrdDkifQ.Yr5jQOkhnP32I7tV_w9FTg'

const useStyles = makeStyles({
	mapContainer: {
		width: '100%',
		height: '60vh',
	},
})

function Map() {
	const [position, setPostion] = useState({
		x: 4.3571,
		y: 50.863,
		z: 18.23,
	})
	const { x, y, z } = position
	const classes = useStyles()
	let mapContainer = null

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [x, y],
			zoom: z,
		})
		map.on('move', () => {
			setPostion({
				x: map.getCenter().lng.toFixed(4),
				y: map.getCenter().lat.toFixed(4),
				z: map.getZoom().toFixed(2),
			})
		})
	}, [mapContainer, x, y, z])

	return (
		<Box
			className={classes.mapContainer}
			ref={(el) => {
				mapContainer = el
			}}
		/>
	)
}

export default Map
