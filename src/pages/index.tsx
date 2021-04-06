import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Grid from '@material-ui/core/Grid';

function index() {
  const [firstName, setFirstName] = useState('Irfan');
  const [lastName, setLastName] = useState('Ahmed');
  const [userName, setUserName] = useState({ first: firstName, last: lastName });
  const [open, setOpen] = React.useState(false);

  const cancelUpdate = () => {
    setFirstName(userName.first);
    setLastName(userName.last);
    setOpen(false);
  };

  const onSave = () => {
    setOpen(false);
    if (firstName) {
      return setUserName({
        ...userName,
        first: firstName,
        last: lastName,
      });
    }
  };

  return (
    <Grid container>
      <Grid item xs={9}>
        <h4>
          {userName.first} <span>{userName.last}</span>
        </h4>
      </Grid>

      <Grid item xs={3}>
        <EditOutlinedIcon
          color="primary"
          onClick={() => {
            setOpen(true);
          }}
        />
      </Grid>

      <Dialog open={open} onClose={cancelUpdate} aria-labelledby="form-dialog-title">
        <DialogTitle style={{ backgroundColor: '#2aaf70' }}>
          <AccountBalanceIcon />
          logo
          <span style={{ color: 'white' }}> Update Name </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Type your First name & Last Name</DialogContentText>

          <TextField
            autoFocus
            id="outlined-required"
            label="First Name"
            type="text"
            defaultValue={userName.first}
            error={firstName.length < 4}
            helperText={'Minimum 4 letters'}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            style={{ margin: '20px' }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            type="text"
            defaultValue={userName.last}
            error={lastName.length < 2}
            helperText={'Minimum 2 letters'}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            style={{ margin: '20px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelUpdate} color="primary">
            Cancel
          </Button>
          <Button
            disabled={lastName.length < 2 || firstName.length < 4 ? true : false}
            onClick={onSave}
            style={{ backgroundColor: '#2aaf70' }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default index;
