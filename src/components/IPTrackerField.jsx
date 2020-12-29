/**
 * IpTrackerField.jsx
 *
 * @summary short description for the file
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 12:08:36
 * Last modified  : 2020-12-29 19:58:03
 */

import { useState, useEffect } from 'react'
import { Box, Button, InputBase, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import isIp from 'is-ip'

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

function IpTrackerField({ ipAddress, placeholder, updateLocalisation }) {
  const [inputValue, setInputValue] = useState('')
  const classes = useStyles()

  function updateIpAddress(value) {
    if (isIp(value)) {
      console.log(value)
      updateLocalisation(value)
    } else {
      console.log('Fuck !')
    }
  }

  useEffect(() => setInputValue(ipAddress), [ipAddress])

  return (
    <Box className={classes.box} display="flex">
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue !== 'Unknown' ? inputValue : ''}
      />
      <Button
        className={classes.btn}
        onClick={() => updateIpAddress(inputValue.trim())}
      >
        <NavigateNextIcon className={classes.icon} />
      </Button>
    </Box>
  )
}

IpTrackerField.propTypes = {
  ipAddress: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  updateLocalisation: PropTypes.func.isRequired,
}

export default IpTrackerField
