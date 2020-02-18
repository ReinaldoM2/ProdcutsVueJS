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

        <v-btn
            type="submit"
        class="mr-4"
        >
         Crear
        </v-btn>
        <v-btn
        class="mr-4" @click="$router.push('/index')"
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
                contact: ''
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
            this.$http.post('http://localhost:3000/brands',{
                ...this.brand
            })
            .then(response=>{
                if (response.data.id) return this.$router.push('/createProducts')
                alert('error to create')
            })
        }
    }
}
</script>

<style scoped>
.container{
    width: 50%;
}
</style>