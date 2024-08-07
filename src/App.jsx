import Layout from "./Layout/Layout"
import Products, { Best_sales } from "./components/item";



function App() {

  const Arr = [
    {
      id: 1,
      name: 'Для эфирных масел',
      img: "/chines.webp",
      price: "1932"

    },

    {
      id: 2,
      name: 'Для гитролатов',
      img: "/chines.webp",
      price: "1432"
    },
    {
      id: 3,
      name: 'Медная посуда',
      img: "/chines.webp",
      price: "1935"
    },
    {
      id: 4,
      name: 'Фксесуар из меди',
      img: "/chines.webp",
      price: "3932"
    },
    {
      id: 5,
      name: 'Индивидуальный заказ',
      img: "/chines.webp",
      price: "1832"
    },
    {
      id: 6,
      name: 'Скидки и предложения',
      img: "/chines.webp",
      price: "1931"
    }
  ];

  const Arr_mini = [
    {
      id: 1,
      name: 'Для эфирных масел',
      img: "/chines.webp",
      price: "1932"

    },

    {
      id: 2,
      name: 'Для гитролатов',
      img: "/chines.webp",
      price: "1432"
    },
    {
      id: 3,
      name: 'Медная посуда',
      img: "/chines.webp",
      price: "1935"
    }
  ];


  return (
    <>


      <Layout>
        <div className="wrap">
          <div className="sec_one">
            <div className="box">
              <div className="first">
                <h1>ХИТ ПРОДАЖ</h1>
                <hr />
                <h2>Дистиллятор для <br /> эфирных масел </h2>
                <div className="item">
                  <p>Цена</p>
                  <span>4 906 грн</span>
                </div>
                <button>Купить</button>
                <div className="color">
                  <div id="one" className="item_color"></div>
                  <div id="two" className="item_color"></div>
                  <div id="three" className="item_color"></div>
                </div>

                <img className="left_ar" src="/ar.svg" alt="#" />
                <img className="right_ar" src="/ar.svg" alt="#" />
              </div>

              <div className="second">
                <img src="/bg_image.svg" alt="fuck" className="bg_image" />
              </div>

            </div>
            <div className="box_sec">
              <h1>НАША ПРОДУКЦИЯ</h1>

              <div className="sec_box">
                {Arr.map(item => <Products item={item} />)}
              </div>
            </div>
            <div className="box_therd_bg">
              <div className="box_therd">
                <h1>ЛУЧШИЕ ПРОДАЖИ</h1>
                <div className="item_box">
                  {Arr_mini.map(item => <Best_sales item={item} />)}
                </div>
                <div className="color">
                  <div id="one" className="item_color"></div>
                  <div id="two" className="item_color"></div>
                  <div id="three" className="item_color"></div>
                </div>
                <div className="btn">
                  <button>Перейти в каталог</button>
                </div>


                <img className="left_ar" src="/ar_black.svg" alt="#" />
                <img className="right_ar" src="/ar_black.svg" alt="#" />
              </div>
            </div>

            <div className="box_fourth_bg">
              <div className="box_fourth">
                <h1>НОВИНКИ</h1>
                <div className="item_box">
                  {Arr_mini.map(item => <Best_sales item={item} />)}
                </div>
                <div className="color">
                  <div id="one" className="item_color"></div>
                  <div id="two" className="item_color"></div>
                  <div id="three" className="item_color"></div>
                </div>
                <div className="btn">
                  <button>Перейти в каталог</button>
                </div>


                <img className="left_ar" src="/ar_black.svg" alt="#" />
                <img className="right_ar" src="/ar_black.svg" alt="#" />
              </div>
            </div>
              
          </div>



        </div>
      </Layout>
    </>
  )
}

export default App
