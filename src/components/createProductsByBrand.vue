<template>
    <div class="container">
        <br>
        <v-form
        ref="form"
    >   
        <v-col>
            <v-text-field
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            required
            ></v-text-field>
        </v-col>
       
        <v-col>
            <v-text-field
            label="Precio"
            type="number"
            required
            ></v-text-field> 
        </v-col>
        
        <v-col>
            <v-text-field
            label="Cantidad"
            type="number"
            required
            ></v-text-field>
        </v-col>
        
        <v-col>
            <v-file-input v-model="file" multiple label="File input"></v-file-input>
        </v-col>

        <v-col>
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
        </v-col>
    </v-form>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            products:{
                name: '',
                price: '',
                quantity: ''
            },
            nameRules: [
                v => !!v || 'Nombre requerido'
            ],
            valid: true
        }
    },
    
    methods:{
    }
}
</script>

<style scoped>
.container{
    width: 50%;
}
</style>