import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

interface Props {
  isOpen: boolean;
  onAccept: () => void;
}

const DisclaimerModal: React.FC<Props> = ({ isOpen, onAccept }) => {
  return (
    <Dialog open={isOpen} aria-labelledby="disclaimer-dialog-title">
      <DialogTitle id="disclaimer-dialog-title">Disclaimer</DialogTitle>
      <DialogContent>
        <DialogContentText>
            We declare that there is an inherent risk in investing, and that the party facilitating the investment does not provide any guaranteed return on any investments made.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAccept} color="primary">
          I Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DisclaimerModal;
