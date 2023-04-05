import React from "react";
import Article from "../../Components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
   <div className="gpt3__blog section__padding" id="blog">
     <div className="gpt3__blog-heading">
       <h1 className="gradient__text">
         A lot is happening, <br /> We are blogging about it.
       </h1>
     </div>
     <div className="gpt3__blog-container">
       <div className="gpt3__blog-container_groupA">
         <Article
           imgUrl={blog01}
           date="Sep 26, 2022"
           text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
         />
       </div>
       <div className="gpt3__blog-container_groupB">
         <Article
           imgUrl={blog02}
           date="Nov 26, 2022"
           text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
         />
         <Article
           imgUrl={blog03}
           date="Jan 2, 2023"
           text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
         />
         <Article
           imgUrl={blog04}
           date="Mar 5, 2023"
           text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
         />
         <Article
           imgUrl={blog05}
           date="Apr 4, 2023"
           text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
         />
       </div>
     </div>
   </div>
  )
};

export default Blog;
