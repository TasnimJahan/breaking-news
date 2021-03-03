import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadlines = () => {
    const API = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=efb1b8ad0a1c485c82cf78990e39c051';
    const [allArticles, setAllArticles] =useState([]);
    useEffect(()=>{
        fetch(API)
        .then(res=> res.json())
        .then(data=>setAllArticles(data.articles))
    },[])
    console.log(allArticles);
    return (
        <div>
            <h2>total articles:{allArticles.length}</h2>
            {
                allArticles.map(article =><News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadlines;