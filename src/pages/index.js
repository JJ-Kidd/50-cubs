import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import Wrap from '../components/Wrap';
import styled from 'styled-components'; 

const SponsorWrap = styled.div`
  display: flex;
  border-top: solid red 2px; 
  border-bottom: solid red 2px; 
  align-items: center;
  justify-content: center;
  margin-bottom: 3em;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 768px){
    flex-direction: row;
    width:100%;
  }
`

const Home = () => (
  <Layout>
    <div style={{ position: 'relative' }}>
      <StaticImage 
      src="../img/on-cubs.jpg" 
      alt="Riders and the cubs" 
      placeholder="blurred"
      layout="fullWidth"
      />
    </div>
    <Wrap>
<section className="section">
      <h1 className="title">
    Mission statement.
      </h1>
      <p className="block">
To ride the extreme coastline of the UK on Honda 50 cubs a journey of more than 4700 miles on machines that can do a maximum speed of 37 mph.
</p>
<p className="block">
As two of the three riders work full time running Complete Engineering services Ltd. in Crosby-on-Eden thus, they will need to use holiday to fulfil this objective the journey will therefore be split into three legs. Dee on the other hand is now fully retired after 26 years of founding and running LLED Construction Ltd in Carlisle.
</p>

<p className="block">
Leg one was completed in September 2021, the trio set off from Carlisle and travelled clockwise around mainland and some of the islands of Scotland ending at Holy Island Northumberland. The journey of 1434 miles took ten days to complete and raised a stunning £ 6535.00 in sponsorship.
</p>

<p className="block">
Leg two Holy Island to Exeter traveling down the eastern side of England and then along the south coast will commence on June 21st. 2022 and hopefully be completed by the 1st. July 2022.
</p>

<p className="block">
Finally leg three from Exeter traveling up the western coastline of England and Wales returning to Carlisle will be undertaken in 2023 on a date yet to be determined.
</p>

</section>

<section className="section">
      <h1 className="title">
Mission purpose
</h1>
<p className="block">
Firstly, three motorcycle daft mates having a laugh and ripping the Mickey out of each other continually. Secondly to raise money for Blood Bikes Cumbria (BBC) and on leg one The Cumberland Infirmary, Carlisle, (CIC). On leg two sponsorship money will be split equally between Blood Bikes Cumbria and Lymphoma Action.
</p>
<p className="block">
Why these causes you ask? Dee (pictured centre) has been a blood bike rider and fund raiser for BBC since 2015 he is currently the charity’s vice treasurer, Monkey (pictured right) was hospitalized for ten days in January 2021 with Covid-19 in CIC and wished to show thanks to the lifesaving care he received in this our local hospital. A close associate of Monkey & Bowie’s is Jake Johnston who is 24 years old and has been battling with a form of Non-Hodgkin Lymphoma known as Diffuse Large B-Cell NHL for the past 4 months. He is coming towards the end of his Chemotherapy treatment before beginning radiotherapy. Lymphoma Action provides free emotional support and information to people affected by lymphatic cancer (Hodgkin and non-Hodgkin lymphomas) - the 5th most common cancer diagnosed in the UK.
</p>
<p className="block">
The entire trip is being funded personally by the three riders and all sponsorship goes directly and fully to the two stated causes in equal measure. Leg one was completed without the aid of a support vehicle and the intent is to continue so on legs two and three.
</p>
</section>
    </Wrap>

  <Wrap>
  <section className="section">
<h1 className="title">
    Our Sponsors
      </h1>
      </section>
      </Wrap>
      <SponsorWrap>
      <a href="https://www.edenvalleyhospice.org/" style={{margin: '15px'}}>
      <StaticImage 
      src="../img/eden-valley-hospice-jigsaw-logo.png" 
      alt="Eden Valley Hospice" 
      placeholder="blurred"
      layout="fixed"
      height={75}
      />
      </a>
      
      <a href="https://www.jkphotography.org.uk/clients/" style={{margin: '15px'}}>
      <StaticImage 
      src="../img/jkphotography.jpeg" 
      alt="JK Photography" 
      placeholder="blurred"
      layout="fixed"
      height={75}
      />
      </a>

      <a href="https://www.ceratizit.com/" style={{margin: '15px'}}>
      <StaticImage 
      src="../img/ceratizit.jpeg" 
      alt="Ceratizit" 
      placeholder="blurred"
      layout="fixed"
      height={75}
      />
      </a>

      <a href="http://www.lled.co.uk/" style={{margin: '15px'}}>
      <StaticImage 
      src="../img/lled.png" 
      alt="Lled Construction" 
      placeholder="blurred"
      layout="fixed"
      height={75}
      />
      </a>

      <a href="https://bloodbikescumbria.org.uk/" style={{margin: '15px'}}>
      <StaticImage 
      src="../img/bb-logo-small.png" 
      alt="Blood Bikes Cumbria" 
      placeholder="blurred"
      layout="fixed"
      height={75}
      />
      </a>

      <a href="https://www.completeengineeringservices.com/" style={{margin: '15px'}}>
      <StaticImage 
      src="../img/complete.png" 
      alt="Complete Engineering Services" 
      placeholder="blurred"
      layout="fixed"
      height={75}
      />
      </a>
</SponsorWrap>



  </Layout>
)

export default Home;