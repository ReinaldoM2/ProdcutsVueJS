const Home = () => import('./components/Index')
const ShowBrand = () => import('./components/ShowBrand')
const createBrand = () => import('./components/createBrand')

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
    }

]

export default Routes
