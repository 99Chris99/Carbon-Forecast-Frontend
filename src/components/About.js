import React from 'react';
import AboutContent from '../content/AboutContent';
import { Accordion } from 'semantic-ui-react'

//                 <h1>Haven't you heard? Everyone's talking about, About!</h1>



  const Content = () => (

<div className="bgPanel">
  <h1>About This App</h1> 


    <Accordion defaultActiveIndex={[]} panels={AboutContent.aboutContent} exclusive={false}/>
  
</div>
  
  )


export default Content;
