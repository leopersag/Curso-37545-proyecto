import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

const ItemCount = (props) => {
    const [count, setCount] = useState(1);
    
    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <button className="btn btn-outline-secondary btn-sm col-auto" onClick={() => {
                    setCount(count === 1
                        ? count
                        : count-1);
                }}>-</button>
                <span className="col-auto">{count}</span>
                <button className="btn btn-outline-secondary btn-sm col-auto" onClick={() => {
                    setCount(props.stock === 0
                        ? count
                        : count===props.stock? count:count+1);
                }}>+</button>
            </div>
            <div className="row p-2 justify-content-center">
                <button className="btn btn-dark col-auto" onClick={() =>{
                    props.stock === 0
                        ? Swal.fire({
                            icon: 'error',
                            title: 'Disculpas',
                            text: 'Por el momento no contamos con stock de este producto', 
                        })
                        : props.onAdd (count);
                }}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;