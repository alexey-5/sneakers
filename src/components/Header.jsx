function Header() {
   return (
      <header className="header">
         <div className="header__left">
            <img width={40} height={40} src="img/header.png" alt="header" />
            <div>
               <h2 className="header__left-h2">REACT SNEAKERS</h2>
               <p className="header__left-p">Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className="header__right">
            <li>
               <img width={18} height={18} src="img/cart18.svg" alt="cart" /><span>1205 руб.</span>
            </li>
            <li>
               <img className="header__right-like" width={20} height={20} src="img/like20.svg" alt="like20" />
               <img width={20} height={20} src="img/login20.svg" alt="login20" />
            </li>
         </ul>
      </header>
   )
}
export default Header