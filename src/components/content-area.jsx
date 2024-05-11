function ContentArea() {
  return (
    <div>
      <main className="content-area container">
        <div className='content'>
          <h1>
            BRING T-SHIRTS FOR THIS HOT SUMMER</h1>
          <p>We have bring pure cotton T-shirt only for you. Very comfortable which made up of very high quality material.Very easy to wash.
            <br /><br />
            Hurry!! Grab it now before it stocked out.
          </p>
          <div>
            <div>
              <button className="Button">Buy Now</button>
              <button className="Button">Cart</button>
            </div>
          </div>
          <div className="available">
              <p>Also avialable on</p>
              <div className="brand-icons">
                <img src="./images/flipkart.png" alt="flipkart" />
                <img src="./images/Amazon.png" alt="Amazon" />
              </div>

            </div>
        </div>
         
        <div className='content-img'>
          <img src="./images/summer tshirts.jpg" alt="Tshirt"/>

        </div>
      </main>
    </div>
  )
}

export default ContentArea;