import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('generalStore', {
  state: () => {
    return { 
        loggedIn: true,
        apps: [
            {name: "pcsx2", state: "running"},
            {name: "desktop", state: "stopped"},
            {name: "steam", state: "stopped"},
        ],
    }
  },
  actions: {
    isUserLoggedIn() {
      return this.loggedIn;
    },
  },
})
