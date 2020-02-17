const Home = () => import('./components/LogIn')
const Index = () => import('./components/Index')
const ShowBrand = () => import('./components/ShowBrand')
const createBrand = () => import('./components/createBrand')
const importBrands = () => import('./components/importBrands')

const Routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/index',
        component:Index,
        meta: {
            private: true
        }
    },
    {
        path: '/:brand_id', 
        component: ShowBrand,
        props: true,
        meta: {
            private: true
        }
    },
    {
        path: '/brand/new',
        component: createBrand,
        meta: {
            private: true
        }
    },
    {
        path:'/brands/import_from_file',
        component: importBrands,
        meta: {
            private: true
        }
    }

]

export default Routes
