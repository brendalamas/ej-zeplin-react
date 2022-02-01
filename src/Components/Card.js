import "../Styles/Card.scss"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const Card = ({title, type, price, img, isAvailable, onSale})=>{

    const [mostrarModal , setMostrarModal] = useState(false);
    const [mostrarBorder, setMostrarBorder] = useState(false)

    const handleClick =()=>{
        setMostrarModal(true)
    }
    const handleClickCerrarModal = ()=>{
        setMostrarModal(false)
    }
    const handleMouseEnter =()=>{
        setMostrarBorder(true)
    }
    const handleMouseLeave =()=>{
        setMostrarBorder(false)
    }

    return (
        <div>
            <div className= 
            {`card ${isAvailable === false && "fondo-no-disponible"} 
            ${mostrarBorder === true && "border-card"}`} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                
                <img className="card-img" src={img}/>

                <div className="row">

                    <div className="columns">

                        <div className="onsale">
                            <h1>{title}</h1> 
                            {onSale === true && <p> ON SALE! </p>}
                        </div>

                        <p> {type.toUpperCase()} </p>

                    </div>
                    <p className="price"> $ {price}</p>  
                </div>

                <div className="icon">
                    <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>

                    <div className="carrito" onClick={handleClick}>
                        <AiOutlineShoppingCart/>
                    </div>

                </div>

            </div>
            {mostrarModal && 
                <article className="modal">
                    <div className="modal-container">
                        <button onClick={handleClickCerrarModal}>X</button>
                        <p>Bien, agregaste este articulo a tu compra!</p>
                    </div>
                </article>
            }
        </div>

        
    )
}

export default Card;