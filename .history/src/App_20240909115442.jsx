function App() {

  return (
    <div className="app">
      <section id="content">
        <header>
            <div>
              <h1>Shop Mart</h1>
              <div>
                <button className="icon-btn">
                  <span>&#129293;</span>
                  <span className="badge">3</span>
                  </button>

                <button className="icon-btn">
                  <span>&#128722;</span>
                  <span className="badge">1</span>
                  </button>
              </div>
            </div>

            <div>
              <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>All products</button>
                <button>Wishlist</button>
              </nav>
              <form>
                <input type="search" placeholder="search"/>
                <button type="button">Go</button>
              </form>
            </div>

        </header>
        <main>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Asics_Gel-Cumulus_22.jpg" alt="shoes"/>
            <p className="pr-name">Awesome shoes</p>
            <p className="pr-price">$2,500</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/OKM_Shirt_Front.png" alt="shirt"/>
            <p className="pr-name">Stylish shirt</p>
            <p className="pr-price">$2,700</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Jacket%2C_striped_%28AM_1929.195.27-7%29.jpg" alt="jacket"/>
            <p className="pr-name">Jacket</p>
            <p className="pr-price">$7,300</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jeans_for_men.jpg" alt="jeans"/>
            <p className="pr-name">Men's Jeans</p>
            <p className="pr-price">$3,500</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/THE_VIEW_%28Virtual_Reality%29.jpg" alt="vr"/>
            <p className="pr-name">Virtual reality</p>
            <p className="pr-price">$13,000</p>
          </div>

          <div className="product">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/ElectricBlender.jpg" alt="blender"/>
            <p className="pr-name">Blender</p>
            <p className="pr-price">$3,100</p>
          </div>

        </main>
      </section>
      <footer>
          <div>
            <h3>Who we are</h3>
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Sell with us</a></li>
            </ul>
          </div>

          <div>
            <h3>Our policies</h3>
            <ul>
              <li><a href="">Return policies</a></li>
              <li><a href="">Shipping policy</a></li>
              <li><a href="">Terms of service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our products</h3>
            <ul>
              <li><a href="">Home page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
            </ul>
          </div>
      </footer>
    </div> 
  );
}

export default App
