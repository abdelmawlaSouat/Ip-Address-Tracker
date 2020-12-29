/**
 * Map.jsx
 *
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-28 09:47:22
 * Last modified  : 2020-12-29 22:03:05
 */

import { useEffect } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import mapboxgl from 'mapbox-gl'
import PropTypes from 'prop-types'
import 'mapbox-gl/dist/mapbox-gl.css'
// import 'mapbox-gl/dist/mapbox-gl'
// import marker from '../images/icon-location.svg'

let mapContainer = null
// let markerContainer = null
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

const useStyles = makeStyles({
  mapContainer: { width: '100%', height: '60%' },
  // marker: {
  //   backgroundImage: `url(${marker})`,
  //   backgroundSize: 'cover',
  //   width: '150px',
  //   height: '150px',
  //   borderRadius: '50%',
  //   cursor: 'pointer',
  // },
})

function Map({ position, zoom, handlePosition, handleZoom }) {
  const classes = useStyles()
  // const markerJson = {
  //   type: 'Feature',
  //   geometry: {
  //     type: 'Point',
  //     coordinates: [position.x, position.y],
  //   },
  //   properties: {
  //     title: 'Mapbox',
  //     description: 'San Francisco, California',
  //   },
  // }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [position.x, position.y],
      zoom,
    })

    new mapboxgl.Marker().setLngLat([position.x, position.y]).addTo(map)

    map.on('move', () => {
      handlePosition({
        x: map.getCenter().lng.toFixed(4),
        y: map.getCenter().lat.toFixed(4),
      })
      handleZoom(map.getZoom().toFixed(2))
    })
  }, [position.x, position.y, zoom, handlePosition, handleZoom])

  // console.log(markerContainer)
  return (
    <Box
      className={classes.mapContainer}
      ref={(el) => {
        mapContainer = el
      }}
    >
      {/* <Box ref={() => markerContainer} /> */}
    </Box>
  )
}

Map.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  handlePosition: PropTypes.func.isRequired,
  handleZoom: PropTypes.func.isRequired,
}

export default Map
