function Modal(){
  return(
   <div className="modal" /* style={{display:'none'}} */>
        <div className="modal__cart">
          <h2>Корзина <img className="cart_del" width={32} height={32} src="img/cart-del.svg" alt="cart-del" /></h2>
          <div className="cart_items">
            <div className="cart_item">
              <img width={70} height={70} src="img/sneak/sn1.jpg" alt="sneak" />
              <div className="cart_info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart_del" width={32} height={32} src="img/cart-del.svg" alt="cart-del" />
            </div>
            <div className="cart_item">
              <img width={70} height={70} src="img/sneak/sn2.jpg" alt="sneak" />
              <div className="cart_info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart_del" width={32} height={32} src="img/cart-del.svg" alt="cart-del" />
            </div>
            <div className="cart_item">
              <img width={70} height={70} src="img/sneak/sn2.jpg" alt="sneak" />
              <div className="cart_info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart_del" width={32} height={32} src="img/cart-del.svg" alt="cart-del" />
            </div>
            <div className="cart_item">
              <img width={70} height={70} src="img/sneak/sn2.jpg" alt="sneak" />
              <div className="cart_info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart_del" width={32} height={32} src="img/cart-del.svg" alt="cart-del" />
            </div>
          </div>
          <ul className="modal_bottom">
            <li>
              <span>Итого: </span>
              <div className="modal_dot"></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div className="modal_dot"></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="modal_btn">Оформить заказ <img className="modal_arr" width={13} height={13} src="img/arr-r13.svg" alt="like20" />
          </button>
        </div>
      </div>
  )
}
export default Modal