import { defineStore } from 'pinia'
import router from '../router/index.js'

export const useGeneralStore = defineStore('generalStore', {
  state: () => {
    return { 
        loggedIn: true,
        apps: [
            {name: "pcsx2", state: "running"},
            {name: "desktop", state: "stopped"},
            {name: "steam", state: "stopped"},
        ],
        stack: [
            {name: "X-Org", state: "running"},
            {name: "Sunshine Server", state: "stopped"},
            {name: "DBus", state: "stopped"},
            {name: "PulseAudio", state: "stopped"},
        ],
    }
  },
  actions: {
    isUserLoggedIn() {
      return this.loggedIn;
    },
    logout() {
      this.loggedIn = false;
    },
    login() {
      this.loggedIn = true;
      router.push("/main");
    },
  },
})
