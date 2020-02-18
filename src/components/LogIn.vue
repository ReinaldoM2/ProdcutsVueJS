<template>
    <div class="container">
        <div class="container__section">
            <h1 style="text-align: center;">Bienvenido</h1>
            <v-facebook-login 
                class="container__section__btnfacebook" 
                app-id='3209612962391455' 
                @login="handleFBLogin" 
                :login-options="{scope:'email'}">
                    <div slot="login">Ingresar con Facebook</div>
                    <div slot="working">Espera</div>
            </v-facebook-login>
        </div>
    </div>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component'
export default {
    components:{
        VFacebookLogin
    },

    data: function(){
        return{
            getfacebookdata: {},
            postfacebookdata: {}
        }
    },
    methods:{
        handleFBLogin(data){
            console.log(data)
            this.getUserDataFromFacebook(data.authResponse.accessToken)
        },
        getUserDataFromFacebook (token) {
            this.$http.get('https://graph.facebook.com/v6.0/me', {
                params: {
                    fields: 'first_name, email, picture{url}',
                    access_token: token
                }
            }) .then(response =>{
                this.getfacebookdata = response.data
                this.postUserDataFromFacebook(response.data)
            })
            .catch(err=>{
                 alert('Error ', err.message)
            })
        },

        postUserDataFromFacebook(authData){
            this.$http.post('https://pure-stream-75584.herokuapp.com//auth/facebook',{
                name: authData.first_name,
                email: authData.email,
                UID: authData.id
            })
            .then(response=>{
                if (response.status===200) {
                    console.log('response' , response)
                    alert('Ingreso Con Exito')
                    localStorage.setItem('user', response.data.UID)
                    return this.$router.push('/index')
                }
                alert('Error al Ingresar')
                    
            }).catch(err=>{
                 alert('Error al Ingresar', err.message)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.container{


    &__section{
        margin-top: 10px;
        position: relative;
        top: 100px;
    }

    &__section__btnfacebook{
        margin: 0 auto !important;
        margin-top: 15px !important;
        cursor: pointer !important;
    }

}
</style>