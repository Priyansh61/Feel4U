<template>
    <div class="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            MoodScope   
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in 
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="loginUser">
                  <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input v-model="credentials.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input v-model="credentials.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                        
                        </div>
                    </div>
                    <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " @click="loginUser">Sign in</button>
                    <p class="text-sm font-light text-gray-500 ">
                       Don't Have an Account? <nuxt-link to="enter" class="font-medium text-primary-600 hover:underline">Sign Up</nuxt-link>
                    </p>
                </form>
                <!-- Display error message if there's any -->
                <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            credentials: {
                email: '',
                password: '',
            },
            errorMessage: '',
        }
    },
    methods: {
        async loginUser() {
            try {
                console.log(this.credentials);
                const response = await axios.post('http://localhost:4000/api/user/login', this.credentials);
                const token = response.data.token;
                localStorage.setItem('authToken', token);
                this.$router.push('/dashboard');
            } catch (error) {
                this.errorMessage = error.response && error.response.data ? error.response.data.message : "Login failed. Please try again.";
            }
        }
    }
}
</script>

<style scoped>
/* You can add any scoped styles here */
</style>
