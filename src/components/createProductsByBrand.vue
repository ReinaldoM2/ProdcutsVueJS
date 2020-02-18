<template>
    <div class="container">
        <br>
        <v-form
        ref="form" @submit.prevent="postProductsByBrand"
    >   
        <v-col>
            <v-text-field
            :counter="10"
            label="Nombre"
            v-model="products.name"
            required
            ></v-text-field>
        </v-col>
       
        <v-col>
            <v-text-field
            label="Precio"
            type="number"
            v-model="products.price"
            required
            ></v-text-field> 
        </v-col>
        
        <v-col>
            <v-text-field
            label="Cantidad"
            type="number"
            v-model="products.quantity"
            required
            ></v-text-field>
        </v-col>
        <v-col>
            <v-file-input v-model="products.image" multiple label="Selecciona una Imagen"></v-file-input>
        </v-col>
        <v-col>
            <v-btn
                type="submit"
            class="mr-4" color="#2ecc71" style="color: white;"
            >
            Crear
            </v-btn>
            <v-btn
            class="mr-4" color="#2ecc71" style="color: white; margin-left: 10px;" @click="$router.push('/index')"
            >
            Volver
            </v-btn>
        </v-col>
    </v-form>
    </div>
</template>
<script>
export default {
    props: ['brand_id'],
    data:function(){
        return{
            products:{
                name: '',
                price: '',
                quantity: '',
                image: ''
            },
           
        }
    },
    
    methods:{
        postProductsByBrand(){
            let formData = new FormData();
            formData.append('name',this.products.name)
            formData.append('price',this.products.price)
            formData.append('quantity',this.products.quantity)
            formData.append('product_image',this.products.image[0])
            this.$http.post(`https://pure-stream-75584.herokuapp.com//brands/${this.brand_id}/products`,formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response =>{
                if (response.status===200){
                    alert('Producto Creado')
                    return this.$router.push('/index')
                }
                alert('Product no creado')
            }).catch(err=>{
                alert('Error',err.message)
            })
        }
    }
}
</script>

<style scoped>
.container{
    margin-top: 110px;
    width: 60%;
    min-height: 53vh !important;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 10px grey;
    padding: 25px;
}
</style>