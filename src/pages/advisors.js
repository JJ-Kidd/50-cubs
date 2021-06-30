import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import Wrap from '../components/Wrap';

const Advisors = () => (
  <Layout>
     <Wrap>
    <section className="section">
 
<h1 className="title">
    Advisors
      </h1>

      <h1 className="subtitle">
    Ben Birchall
      </h1>
      
      <StaticImage 
      src="../img/ben-birchall.png" 
      alt="Ben Birchall" 
      placeholder="blurred"
      layout="fixed"
      height="500"
      />
      <p className="block">
      Ben originally from Mansfield Nottingham commenced motorcycle sidecar racing as a driver in 2003 since then with his brother Tom in the pillion chair the team have won four world championships, 10 TT wins along with multiple British, European and World race and title wins.  
</p>
<p className="block">
Ben, 43 now resides in Caldbeck Cumbria and uses Complete Engineering Services to develop his sidecar unit and carries their logo on the sidecar faring. 
</p>
<p className="block">
How Ben’s guidance from his illustrious career as a professional motorcycle sidecar pilot can assist three old men on 50 Cubs, we’ll leave you to fathom out, nevertheless association with Ben is greatly appreciated. 
</p>
<p>
For more details on Birchall racing <href a="http://birchallracing.com/" alt="Birchall Raching Link">http://birchallracing.com/</href>
</p>

      
</section>
</Wrap>

  </Layout>
)

export default Advisors