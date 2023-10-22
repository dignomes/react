import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import {Box} from '@mui/material';
import ShareCard from '../Components/ShareCard/ShareCard'
import {useDispatch} from 'react-redux';
import {getSomeStocks} from '../Store/SwipingSlice';
import {AppDispatch} from '../Store/Store';

const cat_indexes = [0, 1, 2, 3];

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getSomeStocks());
    }, []);


    const isMobile = window.innerWidth <= 768;

    return (<Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 64px)" // This will make it take up the full height of the viewport
    >
        {/*<AttachMoneyIcon fontSize="large" color="primary" />*/}
        {/*<Typography variant="h4" gutterBottom>*/}
        {/*  Le punir Technologies*/}
        {/*</Typography>*/}


        <div className='cardContainer'>
            <ShareCard></ShareCard>
        </div>


    </Box>);
}

export default Home;
