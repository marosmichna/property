import React from 'react';
import ProperityInsurance from "../../images/Property_insurance.png";
import MortgageLoan from "../../images/mortage_loan.png";
import Design from "../../images/design.png";
import Security from "../../images/security.png";
import ModernSolutions from "../../images/modern_solutions.png";
import Safety from "../../images/safety.png";
import Prepare from "../../images/prepare.png"
import ProductCard from './ProductCard';

const style = {
  cardBg1: `flex flex-col border border-[#DADE13] pt-[14px] pb-[15px] px-[15px]  bg-white  rounded hover:bg-[#DADE13] sm:hover:scale-110 duration-700 hover:text-[#FFFFFF]`,
  cardBg2: `flex flex-col border border-[#DADE13] pt-[14px] pb-[15px] px-[15px]  bg-white  rounded hover:bg-[#FBFBE7] sm:hover:scale-110 duration-700 hover:text-[#DADE13] hover:bg-[#DADE13]`,
  cardBg3: `flex flex-col border border-[#DADE13] pt-[14px] pb-[15px] px-[15px]  bg-white  rounded`,
  cardBtn1a: `bg-[#C4C711] p-1 rounded font-pop sm:leading-[15px] sm:text-[10px] hover:bg-[#FBFBE7] text-black`,
  cardBtn2a: `bg-[#C4C711] py-1 px-3 rounded font-pop sm:leading-[15px] sm:text-[10px] hover:bg-[#FBFBE7] hover:text-black`,
  cardBtn2b: `bg-[#C4C711] py-1 px-3 rounded font-pop sm:leading-[15px] sm:text-[10px] hover:bg-[#FBFBE7] hover:text-black hover:hidden`,
  cardGrid: `sm:flex grid grid-cols-1 sm:flex-row justify-between gap-5`,
  contactButton: `px-5 py-1 bg-[#AEB10F] rounded-md font-pop sm:text-[10px] sm:leading-[20px] sm:mr-8`,
}

const Product = () => {
  return (
    <div name="product" className="mt-10 sm:mb-10 max-w-[1200px] w-full mx-auto px-2 sm:h-screen sm:text-left text-center">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col sm:w-[50%] justify-center">
          <h1 className="font-pap font-normal sm:text-[30px] sm:leading-[43px] sm:w-[70%]">Our <span className="text-[#DADE13]">Products</span> for your dream house
          </h1>
          <p className="mt-10 font-pop font-bold sm:text-[20px] sm:leading-[30px] text-[#C9C9C9] uppercase sm:mt-[100px] sm:w-[65%]">
          Lore Issue is simply dummy text of the printing and typesetting industry. Lore Issue has been the industry's standard dummy text ever since the 1500s
          </p>
          <h2 className="font-pop font-bold uppercase sm:text-[20px] sm:leading-[30px] sm:mt-[100px] mt-10">If you need more informations contact us
          </h2>
          <div className="flex flex-col sm:gap-0 gap-2 sm:flex-row mt-10 w-full mx-auto sm:mb-0 mb-10">
            <button className={style.contactButton}>
              Mail
            </button>
            <button className={style.contactButton}>
              Phone
            </button>
            <button className={style.contactButton}>
              Whatsapp
            </button>
            <button className={style.contactButton}>
              Messenger
            </button>
          </div>
        </div>
        <div className="sm:w-[50%] sm:my-[60px] flex flex-col justify-center sm:gap-10 gap-5">
            <div className={style.cardGrid}>
              <ProductCard 
                cardName="Property insurance"
                cardImage={ProperityInsurance}
                cardBg = {style.cardBg1}
                cardBtn1 = {style.cardBtn1a}
                cardBtn2={style.cardBtn2a}
              />
              <ProductCard
                cardName="Mortgage loan"
                cardImage={MortgageLoan}
                cardBg = {style.cardBg1}
                cardBtn1 = {style.cardBtn1a}
                cardBtn2={style.cardBtn2a}
              />
              <ProductCard 
                cardName="Design"
                cardImage={Design}
                cardBg = {style.cardBg1}
                cardBtn1 = {style.cardBtn1a}
                cardBtn2={style.cardBtn2a}
              />
            </div>
            <div className={style.cardGrid}>
              <ProductCard 
                cardName="Security"
                cardImage = {Security}
                cardBg = {style.cardBg1}
                cardBtn1 = {style.cardBtn1a}
                cardBtn2={style.cardBtn2a}
              />
              <ProductCard 
                cardName="Modern solutions"
                cardImage={ModernSolutions}
                cardBg = {style.cardBg2}
                cardBtn1 = {style.cardBtn1a}
                cardBtn2={style.cardBtn2b}
              />
              <ProductCard 
                cardName="Safety"
                cardImage={Safety}
                cardBg = {style.cardBg2}
                cardBtn1 = {style.cardBtn1a}
                cardBtn2={style.cardBtn2b}
              />
            </div>
            <div className={style.cardGrid}>
              <ProductCard 
                cardName="We prepare"
                cardImage={Prepare}
                cardBg = {style.cardBg3}
                cardBtn1 = "hidden"
                cardBtn2="hidden"
              />
              <ProductCard
                cardName="We prepare"
                cardImage={Prepare}
                cardBg = {style.cardBg3}
                cardBtn1 = "hidden"
                cardBtn2="hidden"
              />
              <ProductCard 
                cardName="We prepare"
                cardImage={Prepare}
                cardBg = {style.cardBg3}
                cardBtn1 = "hidden"
                cardBtn2="hidden"
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product