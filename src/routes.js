import ProductList from './pages/ProductList/ProductList.component';
import ProductDetails from './pages/ProductDetails/ProductDetails.component';


const routes = [
  {
    path: "/",
    exact: true,
    component: ProductList,
    title: "Electronics"
  },
  {
    path: "/:id",
    component: ProductDetails,
    protected: false,
    title: "Product Details"
  },
];

export default routes;
