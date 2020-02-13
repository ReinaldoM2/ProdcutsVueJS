const Home = () => import('./components/Index')
const ShowBrand = () => import('./components/ShowBrand')
const createBrand = () => import('./components/createBrand')
const createProductByBrand = () => import('./components/createProductByBrand')

const Routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/:brand_id', 
        component: ShowBrand,
        props: true
    },
    {
        path: '/brand/new',
        component: createBrand
    },
    {
        path:'/brands/:brand_id/products',
        component: createProductByBrand,
        props: true
    }

]

export default Routes
