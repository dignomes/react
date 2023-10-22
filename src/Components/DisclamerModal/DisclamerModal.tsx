import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router';

interface Props {
  isOpen: boolean;
  onAccept: () => void;
}

const DisclaimerModal: React.FC<Props> = ({ isOpen, onAccept }) => {
  
    const navigate = useNavigate();

    const onAcceptHandler = () => {
      onAccept();
      navigate('/learn');
    }
    
    const theme = useTheme();
    const dialogStyle = {
        backgroundColor: theme.palette.primary.main,
    };
    
    const centeredTitleStyle: React.CSSProperties = {
        color: theme.palette.primary.contrastText,
        textAlign: 'center', 
    };
    
    const centeredContentTextStyle: React.CSSProperties = {
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
    };

  return (
    <Dialog open={isOpen} aria-labelledby="disclaimer-dialog-title" PaperProps={{ style: dialogStyle }}>
    <DialogTitle id="disclaimer-dialog-title" style={centeredTitleStyle}>DISCLAIMER</DialogTitle>
      <DialogContent>
        <DialogContentText style={centeredContentTextStyle}>
            We declare that there is an inherent risk in investing, and that the party facilitating the investment does not provide any guaranteed return on any investments made.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAcceptHandler} style={{ color: theme.palette.primary.light }}>
          I AGREE
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DisclaimerModal;
