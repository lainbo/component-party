import { createResource, For, Switch, Match } from "solid-js";

async function fetchUsers() {
  return (await fetch("https://randomuser.me/api/?results=3")).json();
}

export default function App() {
  const [data] = createResource(fetchUsers);
  const users = () => data()?.results;

  return (
    <Switch>
      <Match when={data.loading}>
        <p>正在获取用户信息</p>
      </Match>
      <Match when={data.error}>
        <p>获取用户信息出错</p>
      </Match>
      <Match when={users()}>
        <ul>
          <For each={users()}>
            {(user) => (
              <li>
                <img src={user.picture.thumbnail} alt="user" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            )}
          </For>
        </ul>
      </Match>
    </Switch>
  );
}
