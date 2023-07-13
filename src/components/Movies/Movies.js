import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { getAllMovies } from '../../api-helpers/api.helpers';
import MovieItem from './MovieItem';

const Movies = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        getAllMovies().then((data => {
            setMovies(data.movies)
        })).catch((err) => console.log(err))
    }, [])
    return (
        <>
            <Box margin={'auto'} marginTop={4}>
                <Typography variant='h4' padding={2} width={'40%'} margin={'auto'} bgcolor={'#900c3f'} color={'white'} borderRadius={10} textAlign={'center'}>All Movies</Typography>

                <Box width={'100%'} margin={'auto'} display={'flex'} justifyContent={'center'} flexWrap={'wrap'} marginTop={5}>
                    {movies && movies.map((movie, index) => (<MovieItem id={movie._id} title={movie.title} releaseDate={movie.releaseDate} posterUrl={movie.posterUrl} key={index} />))}
                </Box>
            </Box>

        </>
    )
}

export default Movies
