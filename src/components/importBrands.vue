<template>
    <div class="container">
       <section class="container__section">
           <article class="container__article">
               <h1 class="container__article__tittle">IMPORTACION DE MARCAS MASIVAS</h1>
               <v-form ref="form" @submit.prevent="postImportBrand">
    <v-container>
      <v-row>
            <v-col>
                <v-file-input v-model="file" multiple label="File input"></v-file-input>
            </v-col>
      </v-row>
      <v-row>
            <v-col>
                <v-btn type="submit">Enviar</v-btn>
                <v-btn class="mr-4" @click="$router.push('/index')"> Volver </v-btn>
            </v-col>
      </v-row>
    </v-container>
  </v-form>
           </article>
       </section>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            errorEnvio: false,
            file: ''
        }
    },

    methods: {
        postImportBrand(){
            let formData = new FormData();
            formData.append('ahjdad',12)
            formData.append('file', this.file[0]);
            console.log(formData)
            this.$http.post('http://localhost:3000/brands/import_from_file',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response=>{
                if (response.status===201) {
                    alert('Importado Con Exito')
                    return this.$router.push('/')
                }
                alert('Error al Importar')
                    
            }).catch(err=>{
                 this.errorEnvio = true
                 alert('Error de Importado', err.message)
            })
        }
    }
    
}

</script>

<style lang="scss" scoped>
    .container {
        width: 60%;
        text-align: center;
        margin-top: 20px;

            &__article{
                margin-top: 10px;
            }
    }
</style>