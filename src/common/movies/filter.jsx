import React, { Component } from 'react';
import './filter.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import genres from './genres';
import artists from './artists';

class SearchMovie extends Component {
    state = { 
        movieTitle:"",
        movieGenre:"",
        movieArtist:"",
        movieStartDate:"",
        movieEndDate:"",

    } 
    filterMovies(movieTitle,movieGenre,movieArtist,movieStartDate,movieEndDate){
        console.log(movieTitle,movieGenre,movieArtist,movieStartDate,movieEndDate);
    }
    handleMovieTitle(movieTitle){
        this.setState({movieTitle});
        console.log(this.state.movieTitle);
    }
    handleMovieGenre(movieGenre){
        this.setState({movieGenre});
        console.log(this.state.movieGenre);
    }
    handleMovieArtist(movieArtist){
        this.setState({movieArtist});
        console.log(this.state.movieArtist);
    }
    handleMovieStartDate(movieStartDate){
        this.setState({movieStartDate});
        console.log(this.state.movieStartDate);
    }
    handleMovieEndDate(movieEndDate){
        this.setState({movieEndDate});
        console.log(this.state.movieEndDate);
    }
    render() {      
        const theme = createTheme({
            spacing: 4,
        }); 
        return (
            <div>
                <div>
                <Card sx={{ minWidth: 240,maxWidth:240 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15, ml:1, mt:2,mb:0 }}  gutterBottom >
                    <span className='MovieSearchform-heading'>FIND MOVIES BY</span>
                    </Typography>
             
                    <Typography variant="h5" component="div">
                    <div className='formInputDiv'>
                        <TextField id="standard-basic" label="Movie Name" variant="standard" className="formInputStyle" onChange={(e)=>{
                            this.handleMovieTitle(e.target.value);
                        }}/>
                    </div>
                    </Typography>
                    
                    <Typography variant="h5" component="div">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-standard-label">Genres</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={this.state.genres}
                            
                            label="Age"
                            >
                                {
                                    genres.map((category)=>{
                                        return <MenuItem value={category.name} key={category.id}>
                                        <div key={category.id}>
                                        <FormControlLabel control={<Checkbox  />} label={category.name} key={category.id} onClick={()=>{
                                            this.handleMovieGenre(category.name);
                                        }}/>
                                        </div>
                                        </MenuItem>
                                    })
                                }
                                
                            </Select>
                        </FormControl>
                    </Typography>
                    <Typography variant="h5" component="div" >
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-standard-label">Artists</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={this.state.artist}
                            
                            label="Age"
                            >
                                {
                                    artists.map((category)=>{
                                        return <MenuItem value={category.first_name+' '+category.last_name} key={category.id}><div key={category.id}> 
                                        <FormControlLabel  control={<Checkbox   />} label={category.first_name+' '+category.last_name} onClick={()=>{
                                            this.handleMovieArtist(category.first_name+' '+category.last_name);
                                        }}/>
                                        </div></MenuItem>
                                    })
                                }
                                
                            </Select>
                        </FormControl>
                    </Typography>
                   
                    <Typography variant="h5" component="div">
                    <div className='formInputDiv'>
                        <div>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
                            <label htmlFor="releasedDateStart" className='formInputLabel'>Released Date Start</label>
                            <input type="date" name="releasedDateStart" id="releasedDateStart" className="formInputStyle"  onChange={(e)=>{
                            this.handleMovieStartDate(e.target.value);
                        }}/>
                        </Typography>   
                        </div>
                    </div>
                    </Typography>
                    
                    <Typography variant="h5" component="div">
                    <div className='formInputDiv'>
                        <div>
                            <Typography sx={{ mb: 0 }} color="text.secondary">
                                <label htmlFor="releasedDateEnd" >Released Date End</label>
                                <input type="date" name="releasedDateEnd" id="releasedDateEnd" className="formInputStyle" onChange={(e)=>{
                            this.handleMovieEndDate(e.target.value);
                        }}/>
                            </Typography>
                        </div>
                        
                    </div>
                    </Typography>
                   
                </CardContent>
                <CardActions className='cardActionDiv'>
                    <div>
                        <button type="submit" className='formInputButton' onClick={()=>
                            this.filterMovies(this.state.movieTitle,this.state.movieGenre,this.state.movieArtist,this.state.movieStartDate,this.state.movieEndDate)}>APPLY</button>
                    </div>
                </CardActions>
                </Card>
                </div>
            </div>
        );
    }
}
 
export default SearchMovie;




{/* <form className='search-container'>
                    <div className='MovieSearchform-heading formInputDiv'>
                        <p>FIND MOVIES BY</p>
                    </div>
                    <div className='formInputDiv'>
                        <input type="text" name="movieName" id="movieName" placeholder='Movie Name' class="formInputStyle"/>
                    </div>
                    <div className='formInputDiv'>
                        <select class="form-select formInputStyle" aria-label="Default select example" >
                            <option selected>genre</option>
                            <option value="1">Action</option>
                            <option value="2">Sci-Fi</option>
                            <option value="3">Comedy</option>
                        </select>
                    </div >
                    <div className='formInputDiv'>
                        <select class="form-select formInputStyle" aria-label="Default select example" >
                            <option selected>Author</option>
                            <option value="1">Linda</option>
                            <option value="2">Rajmoli</option>
                        </select>
                    </div>
                    <div className='formInputDiv'>
                        <div>
                            <label htmlFor="releasedDateStart" className='formInputLabel'>Released Date Start</label>
                        </div>
                        <input type="date" name="releasedDateStart" id="releasedDateStart" class="formInputStyle" />
                    </div>
                    
                    <div className='formInputDiv'>
                        <div>
                            <label htmlFor="releasedDateEnd" className='formInputLabel'>Released Date End</label>
                        </div>
                        <input type="date" name="releasedDateEnd" id="releasedDateEnd" class="formInputStyle" />
                    </div>
                    <div className='formInputDiv'>
                        <button type="submit" className='formInputButton'>APPLY</button>
                    </div>
 </form> */}