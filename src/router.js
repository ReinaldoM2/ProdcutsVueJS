const Home = () => import('./components/Index')
const ShowBrand = () => import('./components/ShowBrand')
const createBrand = () => import('./components/createBrand')
const importBrands = () => import('./components/importBrands')

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
        path:'/brands/import_from_file',
        component: importBrands
    }

]

export default Routes
