import React, { Component } from 'react';
import '../details/details.css'

class Details extends Component {
    render() { 
        console.log(this.props,this.state);
        return (
            <div>
                <div className='header'>
                    <div>
                        <img src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg" alt="Logo" id='logo' />
                    </div>
                    <div className='bookShowButton'>
                        <button >Book Show</button>
                    </div>
                </div>
                <div>
                    <button><span> Back to Home</span> </button>
                </div>
                <div>
                    <div>
                        {/* {this.props.location.state.movie} */}
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Details;