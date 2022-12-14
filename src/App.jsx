import axios from "axios";   
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
/* const arr = [{ imgSrc: "img/sneak/sn1.jpg", title: "Мужские Кроссовки Nike Blazer Mid Suede", prise: 2100 },
{ imgSrc: "img/sneak/sn2.jpg", title: "Мужские Кроссовки Nike Air Max 270", prise: 3400 },
{ imgSrc: "img/sneak/sn3.jpg", title: "Мужские Кроссовки uuu ZZZ Suede", prise: 5600 },] */
  // При перезаписи элементов в корзину id мутирует. Приходится находить соответствие между
  // системным id и своим- внесённым.  

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]); //======== */
  const [itemsCart, setItemsCart] = useState([]);
  const [itemsFavorite, setItemsFavorite] = useState([]);
  const [eventSearch, setEventSearch] = useState(""); //======== */
  // useEffect(() => { // Алексей dynai48@yandex.ru  radio
  /*  fetch('https://63271534ba4a9c47533059e2.mockapi.io/item')
     .then((res)=>{return res.json();})
     .then((json)=>{setItems(json)})
   } */
  /* async function fetchData() {
      const itemsR = await axios.get('https://63271534ba4a9c47533059e2.mockapi.io/item');
      const itemsCartR = await axios.get('https://63271534ba4a9c47533059e2.mockapi.io/cart');
      const itemsFavoriteR = await axios.get('https://63271534ba4a9c47533059e2.mockapi.io/favorite');

      setItems(itemsR.data)
      setItems(itemsCartR.data)
      setItems(itemsFavoriteR.data)
      fetchData()
      //axios.get('https://63271534ba4a9c47533059e2.mockapi.io/favorite')
      //  .then((res) => { setItemsFavorite(res.data) })
    } 
    
  }
    , []) */
    const delItemCart = async(idt) => { // удаление из корзины по аргументу - внесённому idt
      //console.log(id)
      let idm = "0";
      itemsCart.map((item) => {
        if (item.idt === idt) idm = String(item.id);
      });
     //console.log("idm  =" + idm + " id_  =" + idt);
     await axios.delete(`https://63271534ba4a9c47533059e2.mockapi.io/cart/${idm}`);
     await axios
        .get("https://63271534ba4a9c47533059e2.mockapi.io/cart")
        .then((res) => {
          setItemsCart(res.data)})
    };

    const delItemFavor = async(idt) => { // удаление из фаворитов по аргументу - внесённому idt
      let idm = "0";
      itemsFavorite.map((item) => {
        if (item.idt === idt) idm = String(item.id);
      });
     //console.log("idm  =" + idm + " id_  =" + idt);
     await axios.delete(`https://63271534ba4a9c47533059e2.mockapi.io/favorite/${idm}`);
     await axios
        .get("https://63271534ba4a9c47533059e2.mockapi.io/favorite")
        .then((res) => {
          setItemsFavorite(res.data)})
    };
 
    useEffect(() => {
    // Алексей dynai48@yandex.ru  radio
    /*  fetch('https://63271534ba4a9c47533059e2.mockapi.io/item')
       .then((res)=>{return res.json();})
       .then((json)=>{setItems(json)})
     } */
    axios
      .get("https://63271534ba4a9c47533059e2.mockapi.io/item")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://63271534ba4a9c47533059e2.mockapi.io/cart")
      .then((res) => {
        setItemsCart(res.data);
      });
    axios
      .get("https://63271534ba4a9c47533059e2.mockapi.io/favorite")
      .then((res) => {
       setItemsFavorite(res.data);
      });
  }, []);

  const cartPlus = async (obj) => { //find возвращает найденный по условию аргумент или andef.
      const snik = itemsCart.find((item) => item.idt === obj.idt)
    if (itemsCart.find((item) => item.idt === obj.idt) ) { delItemCart(snik.idt)// удаление позиции
    } else {// или запись
      await axios.post("https://63271534ba4a9c47533059e2.mockapi.io/cart", obj);
      await axios
        .get("https://63271534ba4a9c47533059e2.mockapi.io/cart")
        .then((res) => {
          setItemsCart(res.data);
        });
    }
    //console.log(obj);
  };
  console.log('корзина - ',itemsCart);
  // console.log(itemsCart.length)

  //console.log(itemsFavorite)
  const favoritePlus = async(obj) => {
    if (!itemsFavorite.find((item) => item.id === obj.id)) {
      //если не найден такой объект,
     await axios.post("https://63271534ba4a9c47533059e2.mockapi.io/favorite", obj);//постим
      setItemsFavorite((prev) => [...prev, obj]);//обновляем список фаворитов
      //console.log(itemsFavorite)
    }
  };
  console.log('фаворит - ',itemsFavorite);
  

  const addSearch = (event) => {
    //======== */
    //setEventSearch()
    setEventSearch(event.target.value);
  };
  return (
    <div className="wrapper">
      {openCart ? (
        <Modal
        itemsCart={itemsCart}
          cCart={() => setOpenCart(false)}
          delItemCart={delItemCart}
        />
      ) : null}

      <Header openCart={() => setOpenCart(true)} />

      <Home
        items={items}
        itemsCart={itemsCart}
        eventSearch={eventSearch}
        addSearch={addSearch}
        cartPlus={cartPlus}
        favoritePlus={favoritePlus}
        itemsFavorite={itemsFavorite}
        delItemFavor={delItemFavor}
        itemsFavorit={itemsFavorite}
      />
    </div>
  );
}

export default App;
