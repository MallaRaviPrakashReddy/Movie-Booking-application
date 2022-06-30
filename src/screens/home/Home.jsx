/*
TODO 3.1: Creating the Home Component

Create a folder named ‘home’ inside the ‘screens’ folder. Inside the ‘home’ folder, create the ‘Home.js’ and ‘Home.css’ files.
In the Home.js file, create a class component called Home with a render function having empty <div>s, for now, and render it in the index.js file.
Import the Header component into the Home.js file and add it to the div tags. 
*/
import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import MovieList from '../../common/movies/movieList';
import SearchMovie from '../../common/movies/filter';
import ReleasedMovies from '../../common/movies/released';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Details from '../details/details';
class Home extends Component {
    state = {  } 
    render() { 
        return ( 
            <Router>
                <Routes>
                    <Route exact path='/' element={
                        <div>
                            <Header/>
                            <div>
                            <MovieList />
                            </div>
                            <div className='flex-container'>
                                    <div className='left'>
                                        <ReleasedMovies/>
                                    </div>
                                    <div className='right'>
                                        <SearchMovie/>
                                    </div>  
                            </div>
                        </div>
                        }>
                    </Route>
                    <Route  path='/details' element={<Details />}>

                    </Route>
                    
                </Routes>
            </Router>
        
        );
    }
}
 
export default Home;