import { createRouter, createWebHistory } from 'vue-router'
import ProdutosCategorias from '../views/ProdutosCategorias'
const routes = [
  {
    path: '/ProdutosCategorias',
    nome: 'produto',
    component: ProdutosCategorias
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
