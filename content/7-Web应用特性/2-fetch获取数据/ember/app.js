import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";

export default class App extends Component {
  fetchUsers = () => getUsers();
}

class State {
  @tracked isLoading = false;
  @tracked error = null;
  @tracked data = null;
}

function getUsers() {
  let state = new State();

  async function fetchData() {
    state.isLoading = true;

    try {
      let response = await fetch("https://randomuser.me/api/?results=3");
      let { results: users } = await response.json();
      state.data = users;
      state.error = null;
    } catch (err) {
      state.data = null;
      state.error = err;
    }

    state.isLoading = false;
  }

  fetchData();

  return state;
}

// 注意：在 Polaris 中，根本不需要组件的支持类。
// `getUsers`可以直接调用。
