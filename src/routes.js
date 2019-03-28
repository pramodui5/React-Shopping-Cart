import ProductList from './pages/ProductList/ProductList.component';
import ProductDetails from './pages/ProductDetails/ProductDetails.component';
import Cart from './pages/Cart/Cart.component';

const routes = [
  {
    path: "/",
    exact: true,
    component: ProductList,
    title: "Electronics"
  },
  {
    path: "/cart",
    component: Cart,
    title: "Cart"
  },
  {
    path: "/electronics/:id",
    component: ProductDetails,
    title: "Product Details"
  }
];

export default routes;
