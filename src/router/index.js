import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import Cart from '../views/Cart.vue'
import User from '../views/User.vue'
import Product from '../views/Product.vue'
import AddProduct from '../views/AddProduct.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('token')) {
         next({
          name:"User"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },   
  {
    path: '/account',
    name: 'User',
    component: User,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
