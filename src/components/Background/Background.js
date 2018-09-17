import React from 'react';
import Particles from 'react-particles-js'

const Background =() => {
    return(
		<div>
		<Particles
		params={{
			"particles": {
				"number": {
					"value": 100,
					"density": {
						"enable": false
					}
				},
				"color":{
                 "value": "#5fb5f3",
				},
				"size": {
					"value": 6,
					"random": true,
					"anim": {
						"speed": 5,
						"size_min": 0.5
					}
				},
				"line_linked": {
					"enable": false
				},
				"move": {
					"random": true,
					"speed": 1,
					"direction": "random",
					"out_mode": "out"
				}
			},
			"interactivity": {
				"events": {
					"onhover": {
						"enable": true,
						"mode": "repulse"
					},
		
				},
				"modes": {
					"bubble": {
						"distance": 200,
						"duration": 2,
						"size": 0,
						"opacity": 0
					},
					"repulse": {
						"distance": 100,
						"duration": 4
					}
				},
				
			}
		}} />
		</div>
    //     <Particles
    // params={{
	//     "particles": {
	//         "number": {
	//             "value": 100
	//         },
	//         "size": {
	//             "value": 2
	//         }
	//     },
	//     "interactivity": {
	//         "events": {
	//             "onhover": {
	//                 "enable": true,
	//                 "mode": "repulse"
	//             }
	//         }
	//     }
	// }} />

        
    
    )
}

export default Background;