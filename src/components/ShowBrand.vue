<template>
    <section class="container" v-if="!loading">
        <aside class="container__section">
            <v-img src="http://lorempixel.com/198/198/"></v-img>
            <p>{{brand.name}}</p>
            <div>
            <p>Contacto</p>
            <p>{{brand.contact}}</p>
            </div>
            <div>
                Horarios de Atencion
                <p>Lunes        08:00 a 17:00</p>
                <p>Martes       08:00 a 17:00</p>
                <p>Miercoles    08:00 a 17:00</p>
                <p>Jueves       08:00 a 17:00</p>
                <p>Viernes      08:00 a 17:00</p>
                <p>Sabado       08:00 a 17:00</p>
            </div>
        </aside>
        <article class="container__main">
            <h1>Descripcion</h1>
            <p>{{brand.description}}</p>
            <div class="container__div">
                <h1>Para Comprar</h1>
                <br>
                 <v-card  
                    v-for="product in products" 
                    :key="product.id">
                    <v-img src="http://lorempixel.com/198/198/"></v-img>
                        <v-card-subtitle class="pb-0">{{product.name}}</v-card-subtitle>

                        <v-card-text class="text--primary">
                        <div>{{price(product.price)}}</div>
                        </v-card-text>
                    </v-card>
            </div>
        </article>
    </section>
    <p v-else>Cargando</p>
</template>

<script>
import numeral from 'numeral'
export default {
    props: ['brand_id',],
    data: function(){
        return{
            errorMarca: false,
            errorProducto: false,
            brand: null,
            products: [],
            loading: true
        }
    },
    computed: {
        price () {
            return function (num) {
                return numeral(num).format('$0,0')
            }
        }
    },
    methods:{
        getBrandData(){
            this.$http.get('http://localhost:3000/brands/' + this.brand_id)
            .then(response =>{
                this.errorMarca = false
                this.brand = response.data
                this.loading = false
            })
            .catch(err=>{
                 this.errorMarca = true
                 alert('Error ', err.message)
                 this.loading = false
            })
        },

        getBrandProducts(){ 
            this.$http.get(`http://localhost:3000/brands/${this.brand_id}/products/`)
            .then(response =>{
                this.errorProducto = false
                this.products = response.data
                this.loading = false
            })
            .catch(err=>{
                this.errorProducto = true
                alert('Error', err.message)
                this.loading = false
            })
        }
    },
    mounted () {
        console.log(this.brand_id)
        this.getBrandData()


        this.getBrandProducts()
    }
}
</script>
<style lang="scss" scoped>
    .container {
        display: flex;

        &__main {
            flex: 1;
            font-size: 21px;
        }

        &__section {
            width: 40%;
            font-size: 32px;
        }

        &__div {
            width: 100%;
            font-size: 32px;
            padding-top: 2em;
        }
    }
</style>