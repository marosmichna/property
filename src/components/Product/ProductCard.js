import React from 'react';


const ProductCard = ({ cardName, cardImage, cardBg, cardBtn1, cardBtn2 }) => {
  return (
    <div className={cardBg}>
        <h1 className="font-pap mb-5 sm:leading-[14px] sm:text-[12px] font-bold text-center">{cardName}</h1>
        <img className="w-[120px] h-[87px] rounded" src={cardImage} alt="Property insurance" />
        <p className="font-pop uppercase sm:leading-[15px] sm:text-[10px] font-bold  text-center">
                Lore Issue is simply...
        </p>
        <div className="flex flex-row justify-between mt-2">
            <button className={cardBtn1}>
                  Read more
            </button>
            <button className={cardBtn2}>
                  Buy
            </button>
        </div>
    </div>
  )
}

export default ProductCard

