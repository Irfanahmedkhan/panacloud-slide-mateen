import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Formik, Form, Field } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: '0px',
    },
  },
  profileImage: {
    width: '150px',
    height: '150px',
    bottom: '120px',
    border: 'solid white',
  },
  profileImageInside: {
    width: '150px',
    height: '150px',
    border: 'solid white',
  },
  img: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
  userData: {
    padding: '0px 20px',
  },
}));

function index() {
  // const [firstName, setFirstName] = useState('Irfan');
  // const [lastName, setLastName] = useState('Ahmed');
  const classes = useStyles();
  const firstN = useRef();
  const lastN = useRef();
  const HeadLine = useRef();
  const Country = useRef();
  const City = useRef();

  const [userData, setUserData] = useState({
    firstName: 'Irfan',
    lastName: 'Ahmed',
    headLine: 'FullStack Developer',
    country: ' Pakistan',
    city: 'karachi',
  });
  const [open, setOpen] = React.useState(false);

  const cancelUpdate = () => {
    setOpen(false);
  };

  const onSave = () => {
    setOpen(false);
    if (userData) {
      console.log(City.current.value);

      return setUserData({
        ...userData,
        firstName: firstN.current.value,
        lastName: lastN.current.value,
        headLine: HeadLine.current.value,
        country: Country.current.value,
        city: City.current.value,
      });
    }
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={12} style={{ maxHeight: '250px' }}>
        <img
          className={classes.img}
          alt="titleImage"
          src={
            'https://www.contentkingapp.com/media/social-cards/og-en-contentking-title-tag@2x.png'
          }
        />
        <Box p={2}>
          <Avatar
            alt={userData.firstName}
            src={'https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}
            className={classes.profileImage}
          />
        </Box>
      </Grid>

      <Grid container item justify="flex-end">
        <Box p={3}>
          <EditOutlinedIcon
            color="primary"
            onClick={() => {
              setOpen(true);
            }}
          />
        </Box>

        <Dialog open={open} onClose={cancelUpdate} aria-labelledby="form-dialog-title">
          <DialogTitle style={{ backgroundColor: '#2aaf70' }}>
            <span style={{ color: 'white' }}> Edit user Info </span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<AddAPhotoIcon color="primary" />}
              >
                <Avatar
                  alt={userData.firstName}
                  src={'https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}
                  className={classes.profileImageInside}
                />{' '}
              </Badge>
            </DialogContentText>

            <TextField
              required
              autoFocus
              id="outlined-required"
              label="First Name"
              type="text"
              inputRef={firstN}
              defaultValue={userData.firstName}
              style={{ margin: '20px' }}
            />
            <TextField
              required
              id="outlined-basic"
              label="Last Name"
              type="text"
              defaultValue={userData.lastName}
              inputRef={lastN}
              style={{ margin: '20px' }}
            />
            <TextField
              required
              id="outlined-basic"
              label="Headline"
              type="text"
              defaultValue={userData.headLine}
              inputRef={HeadLine}
              style={{ margin: '20px' }}
              fullWidth
            />
            <TextField
              required
              id="outlined-basic"
              label="Country"
              type="text"
              defaultValue={userData.country}
              inputRef={Country}
              style={{ margin: '20px' }}
            />
            <TextField
              required
              id="outlined-basic"
              label="City"
              type="text"
              defaultValue={userData.city}
              inputRef={City}
              style={{ margin: '20px' }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelUpdate} color="primary">
              Cancel
            </Button>
            <Button
              disabled={
                userData.lastName.length < 2 || userData.firstName.length < 4 ? true : false
              }
              onClick={onSave}
              style={{ backgroundColor: '#2aaf70' }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>

      <Grid container item className={classes.userData}>
        <Grid item xs={8} style={{ lineHeight: 0.3 }}>
          <h1>
            {userData.firstName} {userData.lastName}
          </h1>
          <h3>{userData.headLine}</h3>
          <h4>
            {userData.country}, {userData.city}
          </h4>
        </Grid>
        <Grid item xs={4}>
          <h4>company name 1</h4>
          <h4>company name 1</h4>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default index;
