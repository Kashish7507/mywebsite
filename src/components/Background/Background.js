import React from 'react';
import Particles from 'react-particles-js'

const Background =() => {
    return(
        <div>
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 2
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />

        
        </div>
    )
}

export default Background;