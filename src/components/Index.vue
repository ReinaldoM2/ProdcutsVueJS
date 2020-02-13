<template>
<div>
    <div v-if="loading">
        Cargando
    </div>
    <div v-else>
        <h1>Marcas</h1>
        <v-btn small rounded @click="$router.push('/brand/new')">Crear Marca</v-btn>
        <v-btn small rounded>Importar Marca</v-btn>
        <br>
        <br>
        <table>
            <thead>
                <th>Nombre Marca</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr 
                    v-for="brand in list" 
                    :key="brand.id">
                    <td>{{ brand.name }}</td>
                    <td>
                       <v-btn small rounded @click="$router.push(`/${brand.id}`)">Ver</v-btn>
                       <v-btn small rounded>Editar</v-btn>
                       <v-btn small rounded>Eliminar</v-btn>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'IndexScreen',
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
        }
    }, 
    mounted () {
        this.getBrandList()
    }
}
</script>