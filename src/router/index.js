import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import Cart from '../views/Cart.vue'
import User from '../views/User.vue'
import Product from '../views/Product.vue'
import AddProduct from '../views/AddProduct.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import AddAdmin from '../views/AddAdmin.vue'
import UpdateAccount from '../views/UpdateAccount.vue'
import Success from '../views/Success.vue'
import Cancel from '../views/Cancel.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel
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
    path: '/account/update',
    name: 'UpdateAccount',
    component: UpdateAccount,
  },
  {
    path: '/addAdmin',
    name: 'AddAdmin',
    component: AddAdmin,
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
