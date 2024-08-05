import React from "react";


const Layout = ({ children }) => {

  return (
    <>
      <header>
        <div className="left">
          <img src="/logo.svg" alt="" />
          <ul>
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>

        <div className="right">
          <button>
            <img src="/like_btn.svg" alt="" />
          </button>
          <button>
          <img src="/person_btn.svg" alt="" />
          </button>
          <button>
          <img src="/basket_btn.svg" alt="" />
          </button>
        </div>
      </header>
      {children}
      <footer>
            
      </footer>
    </>
  )
}

export default Layout

