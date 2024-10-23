import axios from "axios";
import { useState, useEffect } from "react";

useEffect(()=>{
    const [products, setProducts] = useState([])
    axios.get("https://fakestoreapi.com/products").then(response => setProducts(response.data) )
})





