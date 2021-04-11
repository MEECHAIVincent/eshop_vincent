import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import Cart from '../views/Cart.vue'
import WishList from '../views/WishList.vue'
import User from '../views/User.vue'
import UserCrud from '../views/UserCrud.vue'
import Product from '../views/Product.vue'
import ProductCrud from '../views/ProductCrud.vue'
import AddProduct from '../views/AddProduct.vue'
import AddCategory from '../views/AddCategory.vue'
import UpdateProduct from '../views/UpdateProduct.vue'
import UpdateCategory from '../views/UpdateCategory.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import AddAdmin from '../views/AddAdmin.vue'
import UpdateUser from '../views/UpdateUser.vue'
import OrderCrud from '../views/OrdersCrud.vue'
import CategoryCrud from '../views/CategoriesCrud.vue'
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
    path: '/account/productCrud',
    name: 'ProductCrud',
    component: ProductCrud
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    // beforeEnter(to, from, next) {
    //   if (!localStorage.getItem('token')) {
    //      next({
    //       name:"Login"
    //     })
    //   }
    //   else {
    //     next();
    //   }
    // }
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList,
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
    path: '/account/addCategory',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/account/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/account/updateProduct',
    name: 'UpdateProduct',
    component: UpdateProduct
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
    path: '/account/addAdmin',
    name: 'AddAdmin',
    component: AddAdmin,
  },
  {
    path: '/account/userCrud',
    name: 'UserCrud',
    component: UserCrud,

  },
  {
    path: '/account/update',
    name: 'UpdateUser',
    component: UpdateUser,

  },
  {
    path: '/account/ordersCrud',
    name: 'OrderCrud',
    component: OrderCrud,

  },
  {
    path: '/account/categorysCrud',
    name: 'CategoryCrud',
    component: CategoryCrud,

  },
  {
    path: '/account/updateCategory',
    name: 'UpdateCategory',
    component: UpdateCategory,

  },
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
