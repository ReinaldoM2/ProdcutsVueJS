<template>
    <section class="container" v-if="!loading">
        <aside class="container__section">
            <v-img class="container__section__imglogo" src="https://demo.amapola.design/wp-content/uploads/2018/07/brands_placeholder.jpg"></v-img>
            <p class="container__section__name">{{brand.name}}</p>
            <div class="container__section__stars">
                <star-rating :rating="5" read-only :show-rating="false" v-bind:star-size="20"></star-rating>
            </div>
            <div class="container__section__close__shop">
                <p>Tienda mas cerca</p>
                <p class="container__section__close__shop__direction">Km 4.5 VIA Neiva Palermo - Zona Franca Surcolombiana</p>
                <p class="container__section__close__shop__direction">Neiva-Huila</p>
            </div>
            <div class="container__section__contact">
                <p>Contacto</p>
                <p>{{brand.contact}}</p>
                <p>01-8000-020203</p>
            </div>
            <div class="container__section__attention__schedule">
                         <p>Horarios de Atencion</p>
                    <div class="container__section__days">
                        <p><span class="container__section__day_name">Lunes</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Martes</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Miercoles</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Jueves</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Viernes</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Sabado</span><span>08:00 a 17:00</span></p>
                        <p><span class="container__section__day_name">Domingo</span><span>Cerrado</span></p>
                    </div>
            </div>
        </aside>
        <article class="container__main">
            <h1 class="container__main__description">Descripcion</h1>
            <p class="container__main__description__brand">{{brand.description}}</p>
            <div class="container__main__brand__qualify">
                <div class="container__main__qualify">
                    <label>CALIFICAR</label>
                    <star-rating :rating="1" :max-rating="1" read-only :show-rating="false" v-bind:star-size="15"></star-rating>
                </div>
                <div class="container__main__icon">
                    <img :src="require('../assets/icon.svg')" class="container__main__icon__img">
                </div>
            </div>
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
import Rating from 'vue-star-rating'
export default {
    props: ['brand_id',],
    components: {
        'star-rating': Rating
    },
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
                margin-top: 10px;
            }

            &__brand__qualify{
                display: flex;
                padding-top: 15px;
            }

            &__qualify{
                color: #9393a0;
                font-family: SF Bold,SF,Arial,Helvetica Neue,Helvetica,sans-serif;
                line-height: 40px;
                font-size: 13px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }

            &__qualify:hover{
                border-color: #ffc23f;
                color: #ffc23f!important;
            }

            &__icon{
                position: static;
                border: 1px solid #e9e9f0;
                border-radius: 2px;
                margin-left: 20px;
                margin-top: 5px;
            }

            &__icon__img{
                width: 17.21px;
                height: 16px;
                object-fit: contain;
                border-style: none;
                display: inline-block;
                vertical-align: middle;
                max-width: 100%;
                height: auto;
            }

        }

        &__section {
                    width: 300px;

                    &__imglogo{
                        width: 198px;
                        height: 198px;
                    }

                    &__name{
                    font-size: 34px;
                    }

                    &__attention__schedule{
                    font-size: 21px;
                    margin: 15px 0;
                    width: 75%;
                    }

                &__day_name{
                    width: 45%;
                    font-weight: bold;
                    display: inline-block;
                    padding-top: 20px;
                    font-size: 16px;
                }

                &__days{
                    font-size: 15px;
                    font-weight: lighter;

                }

                &__close__shop{
                    font-size: 21px;
                    margin-top: 10px;
                    width: 75%;
                }

                &__close__shop__direction{
                    font-size: 16px;
                }
                &__contact{
                    margin-top: 10px;
                    font-size: 21px;
                    width: 75%;

                    p+p{
                        margin: 0;
                        text-indent: 0;
                        font-size: 16px;
                    }
                } 

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
            margin-right: 20px;
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