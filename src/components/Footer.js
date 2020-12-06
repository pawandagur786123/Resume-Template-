import React from 'react';
import './Footer.css';
import './Intro.css'
import { Button } from './Button';


function Footer() {
	const content = [{'name' : 'TEN THE BEST APP IN 2017', 'description' : "With upwards of 2 million apps available in Apple’s app store and Android’s Google Play store, it can be a chore to find the truly useful tools or fun games to play." },
                    {'name' : 'WEBSITE INSPIRATION', 'description' : "Our daily mission : find and showcase the best web design inspirations and trends. " },
                    {'name' : 'CHANGES IN SOCIAL MEDIA', 'description' : "Your social media strategy is the map that guides your social media marketing plans for the upcoming campaign, quarter or year." }
                      ]
  return (
  	<div>
   		<div className="position_div">
	   		<img src = {require('../assets/footer.png').default} alt = "footer" className="image_1 responsive_img" />
	   		<div className="position_elements style_elements">
   			</div>
   		</div>
   		<div className="positional_text">
		   	<div className="extra_dark" >Edward M. Brooks</div>
	   		<div>Marketing Books</div>
	   		<div className="rating-static rating-45"></div>	
		</div>
		<div className = "Read_me">
		   	<h1 >READ ME</h1>
	   		<p>Somethings I write something smart</p>
	   		<div className="project_parent">
			{content && content.map((cont,index)=>{
            return(
                <div className="project_child" key={index}>
                  <div className="responsive_img_empty_space" />
                  <div style={{textAlign:'left'}}>
                    <div className="name_font extra_dark">{cont.name}</div>
                  	<p className="description_font">{cont.description}</p>
                  	
                   <Button
		              className='btn'
		              buttonStyle='btn--outline'
		              buttonSize='btn--small'
		            >
		            READ MORE
		            </Button>
		         </div>
              </div>
            )
          }
	   		)}
	   		</div>
		</div>
    </div>
  );
}

export default Footer;
