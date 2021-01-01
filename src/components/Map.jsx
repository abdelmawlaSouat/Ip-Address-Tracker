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

let mapContainer = null
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

const useStyles = makeStyles({
  mapContainer: {
    position: 'absolute',
    top: '38vh',
    bottom: 0,
    width: '100%',
  },
})

function Map({ position, zoom, handlePosition, handleZoom }) {
  const classes = useStyles()

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [position.x, position.y],
      zoom,
    })
    if ((position.x && position.y) !== 0) {
      const style = { color: 'black', scale: 1.3 }
      new mapboxgl.Marker(style).setLngLat([position.x, position.y]).addTo(map)
    }
  }, [handlePosition, handleZoom, position.x, position.y, zoom])

  return (
    <Box
      className={classes.mapContainer}
      ref={(el) => {
        mapContainer = el
      }}
    />
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
