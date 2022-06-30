import React, { Component } from 'react';
import '../moviedata';
import { Box, ImageList } from '@mui/material';
import { ImageListItemBar } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import moviesData from '../moviedata';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
class MovieList extends Component {
    state = {  } 
    render() { 
        let ImageStyle={
            margin:0,
        }
       
        return (
            <div style={this.ImageStyle}>
                <div style={{backgroundColor:'#ff9999',padding:8,textAlign:'center',fontSize:'1rem'}}>Upcoming Movies</div>
                
                <Box component="div" overflow="auto" bgcolor="background.paper"> 
                        <ImageList cols={5} style={{margin:0,display:'flex',flexDirection:'row',}} sx={{height: "400px",width:"max-content"} }>
                        {moviesData.map((item) => (
                            <ImageListItem key={item.id} style={{width:"max-content"}}>
                                  
                            <img
                                src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                              
                            />
                            <ImageListItemBar
                                title={item.title}
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Box>
                
            </div>
        );
    }
}
 
export default MovieList;

