import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'

const store = createStore({
    state() {
        return {
            user: {}
        }
    },
    getters: {
        user(state) {
            // state variable contains our state data
            return state.user;
        },
        isLoggedIn(state) {
            return Object.keys(state.user).length != 0 && state.user.hasOwnProperty('token');
        },
        isAdmin(state) {
            return Object.keys(state.user).length != 0 && state.user.hasOwnProperty('token') && state.user.role == 'ADMIN';
        },
        isConseiller(state) {
            return Object.keys(state.user).length != 0 && state.user.hasOwnProperty('token') && state.user.role == 'CONSEILLER';
        },
        isUser(state) {
            return Object.keys(state.user).length != 0 && state.user.hasOwnProperty('token') && state.user.role == 'USER';
        },
        userOnline(state) {
            return state.userOnline;
        }
    },
    mutations: {
        addUser(state, newUser) {
            if (newUser.id !== undefined && typeof newUser.firstName == 'string' && typeof newUser.lastName == 'string' && typeof newUser.token == 'string') {
                state.user = {
                    id: newUser.id,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    token: newUser.token,
                    role: newUser.role,
                }
            } else {
                console.log('Invalid user');
            }
        },
        removeUser(state) {
            state.user = {};
        },
        updateUser(state, user) {
            state.user.firstName = user.firstName;
            state.user.lastName = user.lastName;
            state.user.role = user.role;

        },
        updateUserName(state, info) {
            if (info.firstName != '') {
                state.user.firstName = info.firstName;
            }
            if (info.lastName != '') {
                state.user.lastName = info.lastName;
            }
        },
        loadStore() {
            if (localStorage.getItem('store')) {
                try {
                    this.replaceState(JSON.parse(localStorage.getItem('store')));
                }
                catch (e) {
                    console.log('Could not initialize store', e);
                }
            }
        },
        setUserOnline(state, userOnline) {
            state.userOnline = userOnline;
        }
    },
    actions: {

        async login(store, credentials) {
            const url = (import.meta.env.VITE_API_URL)
            return axios.post(`${url}/api/auth/login`, credentials)
                .then(res => {
                    const userId = res.data.id;
                    store.commit('addUser', {
                        id: res.data.id,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        token: res.data.token,
                        role: res.data.role,
                        status: res.data.status
                    });
                    router.push({ name: 'Home' });
                })
                .catch(err => {
                    return err.response.data.msg;
                })
        },

    },
})
store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

createApp(App).use(router).use(store).mount('#app')

