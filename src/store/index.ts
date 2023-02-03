import { createStore } from "vuex";
import { People, PeopleWithId } from "@/types";
import axios from "axios";
import { Mutations } from "@/store/types";

const favoritesKey = "favorites";
export default createStore({
  state: {
    peoples: [] as People[],
    favoriteIds: JSON.parse(
      localStorage.getItem(favoritesKey) ?? "[]"
    ) as PeopleWithId["id"][],
  },
  getters: {
    peopleWithId(state): PeopleWithId[] {
      return state.peoples.map((p) => ({
        ...p,
        id: p.url.split("/").reverse()[1],
      }));
    },
    favorites(state, getters): PeopleWithId[] {
      return getters.peopleWithId.filter((p: PeopleWithId) =>
        state.favoriteIds.includes(p.id)
      );
    },
  },
  mutations: {
    [Mutations.SET_PEOPLES](state, payload: People[]) {
      state.peoples = payload;
    },
    [Mutations.ADD_PEOPLES](state, payload: People[]) {
      state.peoples.push(...payload);
    },
    [Mutations.SET_FAVORITES_ID](state, payload: PeopleWithId["id"]) {
      state.favoriteIds.push(payload);
      localStorage.setItem(favoritesKey, JSON.stringify(state.favoriteIds));
    },
    [Mutations.REMOVE_FAVORITES_ID](state, payload: PeopleWithId["id"]) {
      state.favoriteIds = state.favoriteIds.filter(
        (favoriteId) => favoriteId !== payload
      );
      localStorage.setItem(favoritesKey, JSON.stringify(state.favoriteIds));
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
