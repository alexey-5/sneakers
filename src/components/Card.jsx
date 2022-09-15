function Card(){
   return(
      <div className="card">
            <img className="card__like" width={30} height={30} src="img/unlike30.svg" alt="like" />
            <img width={133} height={112} src="img/sneak/sn1.jpg" alt="sneak" />
            <p className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__prise">
              <div>
                <p>ЦЕНА</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={32} height={32} src="img/plus32.svg" alt="plus" />
              </button>
            </div>
          </div>
   )
}
export default Card