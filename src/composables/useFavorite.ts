import { PeopleWithId } from "@/types";
import { Mutations } from "@/store/types";
import { computed } from "vue";
import { useStore } from "vuex";

export function useFavorite(people: PeopleWithId) {
  const store = useStore();
  function addFavorite() {
    store.commit(Mutations.SET_FAVORITES_ID, people.id);
  }
  function removeFavorite() {
    store.commit(Mutations.REMOVE_FAVORITES_ID, people.id);
  }

  const isFavorite = computed(() =>
    store.state.favoriteIds.includes(people.id)
  );
  return { isFavorite, addFavorite, removeFavorite };
}
