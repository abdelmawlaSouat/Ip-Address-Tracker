/**
 * IpTrackerField.jsx
 *
 * @summary short description for the file
 * @author Abdelmawla Souat <abdelmawla.souat@gmail.com>
 *
 * Created at     : 2020-12-26 12:08:36
 * Last modified  : 2020-12-29 21:01:28
 */

import { useState, useEffect } from 'react'
import { Box, Button, Grid, InputBase, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import isIp from 'is-ip'
import swal from 'sweetalert'

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
      fontSize: '12px',
    },
  },
  invalid: { color: 'red' },
  icon: { color: 'white' },
}))

function IpTrackerField({ ipAddress, placeholder, updateLocalisation }) {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const classes = useStyles()

  function updateIpAddress(value) {
    if (isIp(value)) {
      setIsValid(true)
      updateLocalisation(value)
    } else {
      setIsValid(false)
      swal({
        title: 'Address IP invalid !',
        text: 'Please check the field.',
        icon: 'error',
      })
    }
  }

  useEffect(() => setInputValue(ipAddress), [ipAddress])

  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={5}>
        <Box className={classes.box} display="flex">
          <InputBase
            className={clsx(classes.input, !isValid ? classes.invalid : '')}
            placeholder={placeholder}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') updateIpAddress(inputValue.trim())
            }}
            value={inputValue !== 'Unknown' ? inputValue : ''}
          />
          <Button
            className={classes.btn}
            onClick={() => updateIpAddress(inputValue.trim())}
          >
            <NavigateNextIcon className={classes.icon} />
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

IpTrackerField.propTypes = {
  ipAddress: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  updateLocalisation: PropTypes.func.isRequired,
}

export default IpTrackerField
