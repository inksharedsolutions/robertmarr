import React from 'react'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                          My name is Robert Marr I was born in Kentucky
                          into a military family and grew up in Georgia.
                          I am the youngest of 4 siblings. When I was 18,
                          I enlisted in the Marine Corps and served four years.
                          I got my BA in Liberal Arts from Alliant International University 2011.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Robert</span>
                            <span>Marr</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;