<template>
    <section class="container" v-if="!loading">
        <aside class="container__section">
            <v-img class="container__section__imglogo" src="https://demo.amapola.design/wp-content/uploads/2018/07/brands_placeholder.jpg"></v-img>
            <p id="nombre">{{brand.name}}</p>
            <div class="container__section__stars">
                <v-img></v-img>
            </div>
            <div>
            <p id="contacto">Contacto</p>
            <p>{{brand.contact}}</p>
            </div>
            <div id="horarios_atencion">
                         <p>Horarios de Atencion</p>
                    <div class="container__section__days">
                        <p><span class="container__section__day_name">Lunes</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Martes</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Miercoles</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Jueves</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Viernes</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Sabado</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Domingo</span><span>08:00 a 17:00</span></p>
                    
                   
                    
                    
                    
                    </div>
            </div>
        </aside>
        <article class="container__main">
            <h1 class="container__main__description">Descripcion</h1>
            <p class="container__main__description__brand">{{brand.description}}</p>
            <div class="container__div">
                <h1 class="container__div__buy">Para Comprar</h1>
                <div class="container__cards">
                    <v-card  class="container__card"
                    v-for="product in products" 
                    :key="product.id">
                    <v-img class="container__card__img" src="https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png"></v-img>
                        <v-card-subtitle class="pb-0">{{product.name}}</v-card-subtitle>

                        <v-card-text>
                        <div>{{price(product.price)}}</div>
                        </v-card-text>
                    </v-card>
                </div>
                
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
        width: 1024px;
        margin: 0 auto;


        &__main {
            flex: 1;
            font-size: 21px;
            margin-left: 10px;

            &__description{
                font-size: 21px;
            }

            &__description__brand{
                font-size: 16px;
            }
        }

        &__section {
            width: 300px;

            &__imglogo{
                width: 198px;
                height: 198px;
            }

           &__day_name{
               width: 45%;
               font-weight: bold;
               display: inline-block;
           }

           &__days{
               font-size: 15px;
               font-weight: lighter;

           } 

        }

        #nombre{
            font-size: 34px;
            font-family:  SF Bold,SF,Arial,Helvetica Neue,Helvetica,sans-serif;
        }

        #contacto{
            font-size: 21px;
            font-family: SF Bold,SF,Arial,Helvetica Neue,Helvetica,sans-serif;
        }

        #horarios_atencion{
            font-size: 21px;
            margin: 15px 0;
            width: 75%;
        }

        #dias{
            background-repeat: no-repeat;
            padding: 0;
            margin: 0;
            padding: 5px 0;
            font-family: SF Bold,SF,Arial,Helvetica Neue,Helvetica,sans-serif;
            text-align: left;
        }

        &__div {
            width: 100%;
            font-size: 32px;
            padding-top: 2em;

            &__buy{
                font-size: 21px;
            }
        }

        &__card{
            margin-top: 10px;
            width: 28%;
            margin-right: 13px;
            background-color: transparent;
            box-shadow: none;
            border: 1px solid #d4d4d4;

            &:nth-child(3n) {
                margin-right: 0;
            }

            &__img{
                width: 100%;
                height: 198px;
                object-fit: cover;
            }
        }

        &__cards{
            display: flex;
            flex-wrap: wrap;
        }

    
    }
</style>