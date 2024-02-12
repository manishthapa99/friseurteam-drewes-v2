import './Shop.css'

function Card(props){
    return(
    <div>
        <div className="card">
          <img src={props.img} className="class__img" style={{height: "300px", width: "100%", objectFit: "cover"}}/>
          <div className="hello">
            <button className="btn">€13,60</button>
          </div>
        </div>
        <div className="detail">
          <p className="brand">{props.description}</p>
          <h2 className="title">{props.title}</h2>
          <div style={{ borderTop: "2px solid #C8B170 ", marginLeft: 80, marginRight: 80 }}/>  
        </div>
    </div>
    )
  }


function Shop(){
    return(
        <div className="wrapper">
            <Card
                img="/assets/products/glynt-nutri.jpg"
                title="NUTRI Shampoo"
                description="GLYNT"
                price="13.60 euros"/>
            <Card
                img="/assets/products/refresh-shampoo.jpg"
                title="REFRESH Shampoo"
                description="GLYNT"
                price="13.60 euros"/>
            <Card
                img="/assets/products/derma-shampoo.webp"
                title="DERMA Shampoo"
                description="GLYNT"
                price="45 euros"/>
            <Card
                img="/assets/products/pure-shampoo.webp"
                title="PURE Shampoo"
                description="GLYNT"
                price="45 euros"/>
            <Card
                img="/assets/products/sun-shampoo.jpg"
                title="SUN Shampoo"
                description="GLYNT"
                price="7.8 euros"/>
            <Card
                img="/assets/products/sensitive-shampoo.jpg"
                title="SENSITIVE Shampoo"
                description="GLYNT"
                price="45 euros"/>
        </div>
    )
}

export default Shop;  