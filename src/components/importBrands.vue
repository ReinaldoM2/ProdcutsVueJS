<template>
    <div class="container">
       <section class="container__section">
           <article class="container__article">
               <h1 class="container__article__tittle">IMPORTACION DE MARCAS MASIVAS</h1>
               <v-form ref="form" @submit.prevent="postImportBrand">
    <v-container class="container__rows">
      <v-row>
            <v-col>
                <v-file-input v-model="file" multiple label="File input"></v-file-input>
            </v-col>
      </v-row>
      <v-row>
            <v-col>
                <v-btn type="submit" style="background-color: #2ecc71; color: white;">Enviar</v-btn>
                <v-btn class="mr-4"  style="margin-left: 1em; background-color: #2ecc71; color: white;" @click="$router.push('/index')"> Volver </v-btn>
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
            this.$http.post('https://pure-stream-75584.herokuapp.com//brands/import_from_file',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response=>{
                if (response.status===201) {
                    alert('Importado Con Exito')
                    return this.$router.push('/index')
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
        width: 100%;
        padding: 12px;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        

            &__article{
                margin-top: 10px;
            }

            &__section{
                background-color: white;
                padding: 15px;
                border-radius: 17px;
                box-shadow: 5px 5px 10px grey;
                width: 600px;
                text-align: center
            }

            &__article{
                margin-top: 10px;
            }

            &__rows{
                display: block;
            }
            
    }
</style>