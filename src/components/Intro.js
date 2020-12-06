import React, {useState, useEffect} from 'react';
import '../App.css';
import './Intro.css';
import random_img from '../assets/random.png';
import { Button } from './Button';


function Intro(){
  const project = [{'name' : 'CHAT APP', 'Category' : "App", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "Website", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "Interaction", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "App", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "Website", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "Interaction", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "App", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "Website", "image" : random_img },
                            {'name' : 'CHAT APP', 'Category' : "Website", "image" : random_img }]

  const [Projectdetails, setProjectdetails] =  useState(project)
  const [selected_category, setCategory] = useState('');

  useEffect(()=>{
    var details 
    if(selected_category !== ''){
      details = project.filter(prj => prj.Category === selected_category)
      setProjectdetails(details)
    }else{
      setProjectdetails(project)
    }
    
  },[selected_category])
  return (
    <div className='intro-container'>
        <div className="div_row">
          <div className="div_inside_row">
            <div className="intro-user one"/>
            <div className="div_column">
              <h1>Lewis Nathaniel</h1>
              <p>UI & UX Designer</p>
            </div>
          </div>
          <div className="head_container">
              <span className="span_text">WORK</span>
              <span className="span_text">ABOUT ME</span>
              <span className="span_text">BLOG</span>
              <span className="span_text">CONTACT</span>            
            <Button
              className='btn'
              buttonStyle='btn--outline'
              buttonSize='btn--small'
            >
              HIRE ME
            </Button>
          </div>
        </div>

        <div className="div_row ">
          <div className="bio_data">
            <div className = "font_style extra_light">Hello I'm</div>
            <div className = "font_style extra_dark">Lewis Nathaniel</div>
            <div className = "lighter_font">UI & UX</div>
            <div className= "Icons_class">
              <img alt="behance" className = "social_icons" src={require('../assets/behance.png').default}/>
              <img alt="dribble" className = "social_icons" src={require('../assets/dribble.png').default}/>
              <img alt="linkdin" className = "social_icons" src={require('../assets/linkdin.png').default}/>
              <img alt="facebook" className = "social_icons" src={require('../assets/fb.png').default}/>
              <img alt="instagram" className = "social_icons" src={require('../assets/insta.png').default}/>
              <img alt="twitter" className = "social_icons" src={require('../assets/twitter.png').default}/>
            </div>
            <div >
            <Button
              className='btn'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
            HIRE ME
            </Button>
            <Button
              className='btn'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
              hasMargin = {{'margin-left' : '5px' }}
            >
            SEE MY RESUME
            </Button>
            </div>
          </div>  
          <div style={{width:"40%", }}>        
             <img src = {random_img} alt = "profile big pic" className="responsive_img" />
          </div>
        </div>

        <div className="filters">
          <span className="filter_text" onClick={() => setCategory('')}>All</span>
          <span className="filter_text" onClick={() => setCategory('App')}>App</span>
          <span className="filter_text" onClick={() => setCategory('Website')}>Website</span>
          <span className="filter_text" onClick={() => setCategory('Interaction')}>Interaction</span>
        </div>

        <div className="project_parent" style={{justifyContent: Projectdetails.length==2 && 'center'}}>
          {Projectdetails && Projectdetails.map((project,index)=>{
            return(
                <div className="project_child project_border" key={index}>
                  <div className="responsive_img_empty_space border_radius" />
                  <div className="category_class">
                    <div className="category_font">{project.Category.toUpperCase()}</div>
                    <div className="category_font extra_dark">{project.name}</div>
                  </div>
              </div>
            )
          }
          )}
        </div>
        <div className="filters margin_top">
           <Button
              className='btn'
              buttonStyle='btn--outline'
              buttonSize='btn--small'
              hasMargin = {{'margin-left' : '5px' }}
            >
            LOAD MORE WORK
            </Button>
        </div>
        <div className="div_row2">
          <div style={{width:"40%", }}>        
             <img src = {require('../assets/random_pic2.png').default} alt = "profile big pic" className="responsive_img" />
          </div>
          <div className="about_me">
            <h1>ABOUT ME</h1>
            <h2>WHO AM I</h2>
            <p>Our identity should be seen as an ongoing process. Rather than a static snapshot, we should embrace a flowing sense of self, whereby we are perpetually re-framing, re-organizing, re-thinking and re-considering ourselves. As people engage the deepening complexity of understanding themselves, they would fare much better to devote themselves to the unfolding process of life. Witnessing our thoughts, not reacting out of old habit, and becoming present enable us to better craft our lives. As such, the identity that we seek fires the wave of life, enriched by the flow. It makes perfect sense to seek a deeper sense of self.</p>
            <div >
              <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--medium'
              >
              HIRE ME
              </Button>
              <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--medium'
                hasMargin = {{'margin-left' : '5px' }}
            >
            SEE MY RESUME
            </Button>
            </div>
          </div>  
        </div>
    </div>
  );
}

export default Intro;
