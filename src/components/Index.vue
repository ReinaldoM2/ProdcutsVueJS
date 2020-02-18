<template>
<div class="container">
    <div v-if="loading" class="container__if">
        Cargando
    </div>
    <div v-else class="container__else">
        <div class="container__btns">
            <h1>Marcas</h1>
            <v-btn small  color="#2ecc71" style="color: white;" @click="$router.push('/brand/new')">Crear Marca</v-btn>
            <v-btn small  color="#1976D2" style="color: white;" @click="$router.push('/brands/import_from_file')">Importar Marca</v-btn>
        </div>
        <div class="container__table">
            <v-simple-table striped hover :dense="false" 
            :fixed-header="false"
            :height="300">
            <template v-slot:default>
                <thead>
                    <th style="font-size: 15px;">Nombre Marca</th>
                    <th style="font-size: 15px;">Acciones</th>
                </thead>
                <tbody>
                    <tr 
                        v-for="brand in list" 
                        :key="brand.id">
                        <td style="font-size: 25px;">{{ brand.name }}</td>
                        <td>
                        <v-btn small outlined color="#2ecc71" @click="$router.push(`/brands/${brand.id}/products`)">Crear Producto</v-btn>
                        <v-btn small outlined color="#1976D2" @click="$router.push(`/brands/${brand.id}/products/import_from_file`)">Importar Productos</v-btn>
                        <v-btn small  @click="$router.push(`/${brand.id}`)">Ver Marca</v-btn>
                        <v-btn small  color="#E53935" style="color: white;" @click="deleteBrandList(brand.id)">Eliminar Marca</v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
            </v-simple-table>
        </div>
        <br>
    </div>
</div>
</template>

<script>
export default {
    name: 'IndexScreen',
    components:{
    },
    data: function() {
        return {
            list: [],
            loading: true
        }
    },
    methods: {
        getBrandList () {
            this.$http.get('http://localhost:3000/brands')
            .then(response => {
                this.list = response.data
                this.loading = false
            })
            .catch(err=> {
                alert('Error ', err.message)
                this.loading = false
            })
        },

        deleteBrandList(brand_id){
            this.$http.delete('http://localhost:3000/brands/'+brand_id)
            .then(response=>{
                if (response.status===200) {
                    alert('Eliminado Con Exito')
                    return this.getBrandList()
                }
                alert('Error al Eliminar')
                    
            }).catch(err=>{
                 alert('Error', err.message)
            })
        }
    }, 
    mounted () {
        this.getBrandList()
    }
}
</script>

<style lang="scss" scoped>
    .container{
    width: 100%;
        padding: 12px;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        min-height: 96vh !important;

        &__btns{
            margin: 30px;
            padding: 15px;
        }

        &__else{
        margin-bottom: auto;
        text-align: center;
        width: 100%;
       }

       &__table{
           margin: 15px;
           padding: 15px;
       }

    }

    .v-btn{
        margin-left: 5px;
        height: 40px !important;
    }

    .theme--light.v-data-table{
        background-color: transparent !important;
    }

    
</style>