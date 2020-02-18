<template>
    <div class="container">
        <br>
        <v-form
        ref="form"
        @submit.prevent="postBrandData"
    >
        <v-text-field
        v-model="brand.name"
        :counter="10"
        :rules="nameRules"
        label="Nombre"
        required
        ></v-text-field>

        <v-text-field
        v-model="brand.description"
        :rules="nameRules"
        label="Descripcion"
        required
        ></v-text-field>

       <v-text-field
        v-model="brand.contact"
        :rules="emailRules"
        label="Contacto"
        required
        ></v-text-field>

        
        <v-file-input v-model="brand.image" multiple label="Selecciona una Imagen"></v-file-input>
        

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
    </v-form>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            brand:{
                name: '',
                description: '',
                contact: '',
                image:'',
            },
            nameRules: [
                v => !!v || 'Nombre requerido'
            ],
            emailRules: [
                v => !!v || 'Contacto requerido',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            valid: true
        }
    },
    
    methods:{
        postBrandData(){
            let formData = new FormData();
            formData.append('name',this.brand.name)
            formData.append('description',this.brand.description)
            formData.append('contact',this.brand.contact)
            formData.append('brand_image',this.brand.image[0])
            console.log(formData)
            this.$http.post('https://pure-stream-75584.herokuapp.com//brands',formData,{
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