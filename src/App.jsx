import Card from "./components/Card";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="wrapper">
      <Modal/>
      <Header/>
      <div className="content">
        <div className="content__search">
          <h1>Все кроссовки</h1>
          <div className="content__search-block">
            <img width={14} height={14} src="img/search14.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="content__inner">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

          <div className="card">
            <img className="card__like" width={30} height={30} src="img/like32.svg" alt="like" />
            <img width={133} height={112} src="img/sneak/sn2.jpg" alt="sneak" />
            <p className="card__text">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card__prise">
              <div>
                <p>ЦЕНА</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={32} height={32} src="img/checked32.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="card__like" width={30} height={30} src="img/unlike30.svg" alt="like" />
            <img width={133} height={112} src="img/sneak/sn3.jpg" alt="sneak" />
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
          <div className="card">
            <img className="card__like" width={30} height={30} src="img/unlike30.svg" alt="like" />
            <img width={133} height={112} src="img/sneak/sn4.jpg" alt="sneak" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
