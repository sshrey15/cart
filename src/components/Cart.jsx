import React from "react";

class Cart extends React.Component{

    /*MAKING A CONSTRUCTOR WITH A SUPER CONSTRUCTOR*/

    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80'
        }

       
    }

    IncreaseQuantity = () => {
        console.log('this',this.state)
    }

    render(){

        const {price,title,qty} = this.state;
        

        return(
            <div className="cart-item">
                <div className="left-block">

                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80
                    "style={styles.image}/>

                </div>
                <div className="right-block">

                    <div style={{fontsize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>RS: {price}/-</div>
                    <div style={{color: '#777'}}>QTY: {qty}</div>
                    <div className="cart-item-actions">

                        <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                             alt="increase"
                            className="action-icons" 
                            onClick={this.IncreaseQuantity}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" alt="decrease"className="action-icons" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="delete"className="action-icons" />


                    </div>
                    

                </div>

            </div>
        );
    }

}

const styles = {
    image: {
      height: 110,
      width: 110,
      BorderRadius: 10
      
    }
  }

export default Cart;