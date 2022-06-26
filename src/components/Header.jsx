import React from 'react'
import{moneyFormat} from './helpers'
const Header = ({money, total}) => {
  return (
    <>
     {/* Condition Rendering */}
     {total >0 && money-total !==0 &&(
        <div className="header">Balansınızda <span>{moneyFormat(money)} &nbsp; AZN balans var</span></div>
     )}

    { total ===0 && (
        <div className="header">Balansınız <span>{moneyFormat(money)} AZN</span></div>
     )}
     

{
  money-total ===0 && (
    <div className="header empty">Balansınız bitdi</div>
  )
}



<style jsx> 
  {
    `
    .header{
      background: #dedede;
      padding:20px;
      text-align: center;
      position: sticky;
      letter-spacing: 2px;
    }
    .empty{
      background: red;
      color: #fff;
    }
    
    `
  }
 </style>
    </>
  )
}

export default Header