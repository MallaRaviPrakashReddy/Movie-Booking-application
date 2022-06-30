import React, { Component } from 'react';
import { ImageList } from '@mui/material';
import { ImageListItemBar } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import moviesData from '../moviedata';
import {Link} from 'react-router-dom';

class ReleasedMovies extends Component {
    state = {  } 
    render() { 
        return (
            <div >
                
                <ImageList cols={4} style={{margin:0}} sx={{height: 'max-content',flexDirection:'row' }}>
                    {moviesData.map((item) => (
                        <Link to={{
                            pathname: "'/details'",
                            state: { item:item }
                        }}>
                    <ImageListItem key={item.id}>
                    <img
                        src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.release_date}
                    />
                    </ImageListItem>
                    </Link>
                ))}
                </ImageList>
            </div>
        );
    }
}
 
export default ReleasedMovies;