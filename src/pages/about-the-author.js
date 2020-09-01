import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                  “All Flesh Will Die One Day And Leave This World We Now Live In. But The Soul Will Live On. There Is A Choice Individual Have To Make--Who Will Be Your Choice The World Or The Kingdom Of God”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                                <p>
                                    My name is Robert Marr I was born in Kentucky
                                    into a military family and grew up in Georgia.
                                    I am the youngest of 4 siblings. When I was 18,
                                    I enlisted in the Marine Corps and served four years.
                                    I got my BA in Liberal Arts from Alliant International
                                    University 2011. I have been in the construction field off
                                    and on since age 23. Really enjoy working with my hands
                                    and want to pass this knowledge onto teenagers and young adults.
                                </p>

                                <p>
                                  I can think of 3 milestones that have really shaped
                                  who I am today. The first one was at a very young age
                                  I had a strong desire for a wife who would be a companion
                                  to me and love me unconditionally and we would start a family. 
                                  The second milestone would be this innate yearning I had to know
                                  where my family came from. I needed to know where my father's
                                  family came from or where my mother's family came from because
                                  with that information I could really help me find who I am and
                                  where I should be. And the third thing is my camps conversion at
                                  the age 16, I experienced Jesus Christ himself speaking to me and
                                  surrounding me with his presence. I can say honestly it was like
                                  nothing you have ever experienced in this physical realm and
                                  I just knew absolutely Jesus was so real and it was my send
                                  that was keeping me from knowing him. Having these 3 events
                                  in my life has developed who I am as a person today that really
                                  pushed me to find answers to my life circumstances.
                                </p>

                                <p>
                                    With this background context, I began to grow in my
                                    relationship with God once I realized I could ask a
                                    specific question and He would provide me His perspective.
                                    His perspective might not match the current church's perspective
                                    so be forewarned. Now then, I embarked on learning the 1st century
                                    perspective of the Gospel and this radically altered everything I
                                    held as doctrine. Since then, I have only been growing in the Scripture's
                                    holistic message of restoration through God's chosen nation Israel.
                                    My books are my contribution to this generation to behold what God has shown me.
                                </p>

                                <p>

                                    Before I ever got married, it was clear God was
                                    teaching me to be very careful of what I let in my family.
                                    This includes but is not limited to conventional medical,
                                    chemically enhanced foods, cable television shows, and anything promoting
                                    evolving universe. Therefore, it was quite clear we should homeschool our
                                    children to instill in them an evidence based mentality showing them 
                                    firsthand proof of reality that could be tested over and again. 
                                    All of what I have shared leads up to where I am today, reliant
                                    on what God has convicted me of and not today's traditional values demand.
                                </p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Robert Marr</span>
                                </span>
                    
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;