import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../view/IndexView.vue";
import ContactsView from "../view/ContactsView.vue";
import ProductsView from "../view/ProductsView.vue";
import CartView from "../view/CartView.vue";

// Definowanie enuma z nazwami stron

enum Route {
  Index = "index",
  Contacts = "contacts",
  Products = "products",
  Cart = "cart",
}

// Onject router z danymi do sziazki, nazwy oraz widokiem potrzebnej strony

const routes = [
  {
    path: "/",
    name: Route.Index,
    component: IndexView,
  },
  {
    path: "/contacts",
    name: Route.Contacts,
    component: ContactsView,
  },
  {
    path: "/products",
    name: Route.Products,
    component: ProductsView,
  },
  {
    path: "/cart",
    name: Route.Cart,
    component: CartView,
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
