import React from 'react';
import Gallery1 from "../../images/b-1.jpg";
import Gallery2 from "../../images/b-2.jpg";
import Gallery3 from "../../images/b-3.jpg";
import Gallery4 from "../../images/b-4.jpg";
import Gallery5 from "../../images/b-5.jpg";
import Gallery6 from "../../images/c-1.jpg";
import Gallery7 from "../../images/c-2.jpg";
import Gallery8 from "../../images/c-3.jpg";
import Gallery9 from "../../images/c-4.jpg";
import Gallery10 from "../../images/c-5.jpg";

const style = {
    bigImg: `sm:w-[440px] sm:h-[440px] w-full h-[350px] border-4 border-[#DADE13]`,
    smallImg: `sm:w-[220px] sm:h-[220px] w-full h-[350px] border-4 border-[#DADE13]`,
    gridImg: `grid grid-cols-1 sm:grid-cols-2`,
    gridPage: `flex flex-col sm:flex-row justify-between`
}


const Gallery = () => {
  return (
    <div name="gallery" className="max-w-[1200px] w-full mx-auto px-2 sm:h-full sm:my-0 my-10">
        <div className="flex flex-col justify-center">
            <div className={style.gridPage}>
                <div>
                    <img
                        src={Gallery1} 
                        alt="Gallery1" 
                        className={style.bigImg}
                    />
                </div>
                <div className={style.gridImg}>
                    <img
                        src={Gallery2} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                    <img
                        src={Gallery3} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                    <img
                        src={Gallery4} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                    <img
                        src={Gallery5} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                </div>
            </div>
            <div className="text-center">
                <h1 className="font-pap font-normal sm:text-[30px] sm:leading-[43px]">
                    Our <span className="text-[#DADE13]">Gallery</span> for your inspiration
                </h1>
            </div>
            <div className={style.gridPage}>
                <div className={style.gridImg}>
                    <img
                        src={Gallery6} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                    <img
                        src={Gallery7} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                    <img
                        src={Gallery8} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                    <img
                        src={Gallery9} 
                        alt="Gallery1" 
                        className={style.smallImg}
                    />
                </div>
                <div>
                    <img
                        src={Gallery10} 
                        alt="Gallery1" 
                        className={style.bigImg}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery