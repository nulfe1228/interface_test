import React from "react";
import './Banner.css'

function Banner ({ large_cover_image, title, rating, runtime, genres, summary, recommends }){
    if(recommends.length > 0){
        return (
            <div className='banner_container'>
                <div className='banner_info'>
                    <img src={large_cover_image}/>
                    <div className='banner_etc'>
                        <h1>{title}</h1>
                        <span>평점: {rating}점</span>
                        <span>상영시간: {runtime}분</span>
                        <span>장르: {genres.join(" ")}</span>
                        <p>영화 줄거리: {summary.length > 500 ? `${summary.slice(0, 500)}...` : summary}</p>
                        <div className='banner_recommends'>
                            {recommends && recommends.map(recommendedMovie => <img key={recommendedMovie.id} src={recommendedMovie.medium_cover_image}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        <div>Loading...</div>
    }
    
}

export default Banner