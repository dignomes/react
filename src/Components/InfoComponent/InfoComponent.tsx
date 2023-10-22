import { Card, IconButton, Slide } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from "react";
import styles from './InfoComponent.module.css';
import { Stock } from "../../types";

type InfoComponentProps = {
    current: Stock | undefined;
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
                <Card className={styles.cardStopPosition} elevation={2}>
                    {current?.description || ""}
                </Card>
            </Slide>

        </React.Fragment>
    );
};

export default InfoComponent;
