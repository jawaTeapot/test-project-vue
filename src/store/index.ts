import { createStore } from "vuex";
import { People, PeopleWithId } from "@/types";
import axios from "axios";
import { Mutations } from "@/store/types";

export default createStore({
  state: {
    peoples: [] as People[],
    favorite: [] as People[],
  },
  getters: {
    peopleWithId(state): PeopleWithId[] {
      return state.peoples.map((p) => ({
        ...p,
        id: p.url.split("/").reverse()[1],
      }));
    },
  },
  mutations: {
    [Mutations.SET_PEOPLES](state, payload: People[]) {
      state.peoples = payload;
    },
    [Mutations.ADD_PEOPLES](state, payload: People[]) {
      state.peoples.push(...payload);
    },
  },
  actions: {
    async fetchPeoples({ dispatch }) {
      await dispatch("fetchPeoplesAll", "https://swapi.dev/api/people/");
    },
    async fetchPeoplesAll({ dispatch }, url: string) {
      const response = await axios.get(url);
      this.commit(Mutations.ADD_PEOPLES, response.data.results);
      console.log(response);
      if (response.data.next) {
        await dispatch("fetchPeoplesAll", response.data.next);
      }
    },
  },
  modules: {},
});
