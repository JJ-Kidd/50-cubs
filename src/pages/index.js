import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { Heading, Subheading } from '../components/Heading';
import Wrap from '../components/Wrap';
const Home = () => (
  <Layout>
    <div style={{ position: 'relative' }}>
      <StaticImage 
      src="../img/cubs.jpg" 
      alt="Riders and the cubs" 
      placeholder="blurred"
      layout="fullWidth"
      transformOptions={{
        grayscale: true
      }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000', opacity: 0.4}} />
    </div>
    <Wrap>
<section class="section">
      <h1 class="title">
    Mission statement.
      </h1>
      <p class="block">
To ride the extreme coastline of the UK on Honda 50 cubs a journey of more than 4700 miles on machines that can do a maximum speed of 37 mph.
</p>
<p class="block">
As two of the three riders work full time and will need to use holiday to fulfil this objective the journey will be split into three legs. Leg one setting off from Carlisle and traveling clockwise around mainland and some of the islands of Scotland ending at Holy Island Northumberland. Leg two Holy Island to Lands’ End traveling down the eastern side of England and then along the south coat, finally leg three from Lands’ End traveling up the western coastline of England and Wales returning to Carlisle.
</p>
</section>
</Wrap>

<section class="section" style={{backgroundColor: '#ff817b', height:"300px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <a href="https://www.jkphotography.org.uk/clients/">
      <StaticImage 
      src="../img/jkphotography.jpeg" 
      alt="JK Photography" 
      placeholder="blurred"
      layout="fixed"
      height="100"
      />
      </a>

      <a href="https://www.ceratizit.com/">
      <StaticImage 
      src="../img/ceratizit.jpeg" 
      alt="Ceratizit" 
      placeholder="blurred"
      layout="fixed"
      height="100"
      />
      </a>

      <a href="http://www.lled.co.uk/">
      <StaticImage 
      src="../img/lled.png" 
      alt="Lled Construction" 
      placeholder="blurred"
      layout="fixed"
      height="100"
      />
      </a>

      <a href="https://www.completeengineeringservices.com/">
      <StaticImage 
      src="../img/complete.png" 
      alt="Complete Engineering Services" 
      placeholder="blurred"
      layout="fixed"
      height="100"
      />
      </a>


</section>


<Wrap>
<section class="section">
      <h1 class="title">
Mission purpose
</h1>
<p class="block">
Firstly, three motorcycle daft mates having a laugh and ripping the Mickey out of each other continually.
</p>
<p class="block">
Secondly to raise money for Blood Bikes Cumbria (BBC) and The Cumberland Infirmary, Carlisle, (CIC). Why these causes you ask? Dee (pictured centre) has been a blood bike rider and fund raiser for BBC since 2015, Monkey (pictured right) was hospitalized for ten days in January 2021 with Covid-19 in CIC and wishes to show thanks to the lifesaving care he received in this our local hospital.
</p>
<p class="block">
The entire trip is being funded personally by the three riders and all sponsorship goes directly and fully to the two stated causes in equal measure.
</p>
</section>
    </Wrap>
  </Layout>
)

export default Home;