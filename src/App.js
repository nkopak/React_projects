import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {useServices} from "./services";
import {setProducts} from "./redux";
import {Header} from "./components/header";
import {ProductList} from "./components/productList";
import './App.css';

function App() {

    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products}}) => ({
        cart,
        wishlist,
        products
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts())
    }, []);

    return (
        <div className="App">
            <Header/>
            <ProductList products={products}/>
        </div>
    );
}

export default App;
