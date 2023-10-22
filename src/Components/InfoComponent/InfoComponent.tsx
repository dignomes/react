import { Card, IconButton, Paper, Slide, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from "react";
import styles from './InfoComponent.module.css';
import { Stock } from "../../types";
import theme from "../../Theme/Theme";

type InfoComponentProps = {
    current: Stock | undefined;
};

const sxStyles = { 
    margin: '20px 0', 
    padding: '15px', 
    color: theme.palette.primary.contrastText, 
    background: theme.palette.secondary.dark,
  };

const InfoComponent: React.FC<InfoComponentProps> = ({current}) => {
    const [isInfoVisible, setInfoVisible] = useState(false);
    
    const toggleInfo = () => {
        console.log('toggleInfo');
        console.log(isInfoVisible);
        setInfoVisible(!isInfoVisible);
    };

    return (
        <React.Fragment>
            <IconButton 
                aria-label="info"
                className={styles.infoButton}
                onClick={toggleInfo}
            >
                <InfoIcon />
            </IconButton>
            <Slide direction="up" in={isInfoVisible} mountOnEnter unmountOnExit timeout={500}>
                <Paper className={styles.cardStopPosition} elevation={2} sx={sxStyles}>
                    <Typography variant="h5" gutterBottom>
                        {current?.title || ""}
                    </Typography>
                    {current?.description || ""}
                </Paper>
            </Slide>

        </React.Fragment>
    );
};

export default InfoComponent;
