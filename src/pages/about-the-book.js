import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/Book_Cover_02.png'


const ATB = (props)=>{

  const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'robert-marr',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                spanFirst={`About The`}
                contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Guide for Understanding the End of Times`,
                                    spanFirst:``,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                           The Guide for Understanding the End of Times
                                           is about viewing the New Covenant in its proper
                                           context. Once the clues are in order, the whole
                                           picture becomes clear, and we see the end-times correctly.
                                           Currently, there are numerous end-times theories because there
                                           are numerous denominations, having their own perspective. However,
                                           the first disciples showed us what the end-times is about when they
                                           asked Jesus, “When will you restore the kingdom to Israel?” This is the
                                           perspective we need because it matches the Old Testament, the focus of the
                                           prophets, the New Covenant context, and the new Jerusalem details. Join the
                                           process of discovering facts from history!
                                        </p> 

                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/the-guide-for-understanding-the-end-of-times/',
                                        barnes:'https://www.barnesandnoble.com/w/the-guide-for-understanding-the-end-of-times-robert-marr/1136405581?ean=9781643458588',
                                        amazon:'https://www.amazon.com/Guide-Understanding-End-Times-ebook/dp/B084QFVM9X/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1598983748&sr=8-18', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Guide-Understanding-End-Times/dp/1643458574/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1598983748&sr=8-18',
                                        barnes:'https://www.barnesandnoble.com/w/the-guide-for-understanding-the-end-of-times-robert-marr/1136405581?ean=9781643458571',
                                        booksamillion:'https://www.booksamillion.com/p/Guide-Understanding-End-Times/Robert-Marr/9781643458571?id=7714171848832#',
                                    }
                                }} 
                            />

                             <BookInfo
                                data={{
                                    title:`Just Judgment`,
                                    spanFirst:`The case of reality vs error`,
                                    imgSrc: Book2,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                          The conviction of this book is to
                                          demonstrate how everyday facts of life
                                          do point our attention to the meaning
                                          of life. These facts of life are all around
                                          us, yet many are mostly blinded to them
                                          or distracted with their own agendas.
                                        </p> 

                                        <p>
                                          In this book, I will provide evidence of where
                                          human beings came from, what makes up our world
                                          as we experience it, how we got to this point,
                                          and what is to come. Please take a ride on this
                                          discovery adventure through history and many languages.
                                        </p>

                                        <p>
                                          Robert Marr is an enthusiastic teacher and student
                                          of the scriptures and all types of history. He grew
                                          up in a Southern Baptist church and, at age sixteen,
                                          had a fiery born-again encounter with the Messiah Jesus.
                                          Since discovering the context of the scriptures, Robert
                                          has been researching all that pertains to the Old and New
                                          Covenant and the impending prophecies.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/just-judgment-the-case-of-reality-vs-error/',
                                        barnes:'https://www.barnesandnoble.com/w/just-judgment-robert-marr/1136645583?ean=9781643459622',
                                        amazon:'https://www.amazon.com/Just-Judgment-case-reality-error-ebook/dp/B085VWT22D/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Just-Judgment-case-reality-error/dp/1643459619/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
                                        barnes:'https://www.barnesandnoble.com/w/just-judgment-robert-marr/1136645583?ean=9781643459615',
                                        booksamillion:'https://www.booksamillion.com/p/Just-Judgment/Robert-Marr/9781643459615?id=7714171848832',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;