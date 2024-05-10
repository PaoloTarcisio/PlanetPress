import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './pages/Homepage.vue';
import NotFound from './pages/NotFound.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: Homepage
},
{
path: '/:pathMatch(.*)*',
name: 'NotFound',
component: NotFound
},
]
});
export { router };