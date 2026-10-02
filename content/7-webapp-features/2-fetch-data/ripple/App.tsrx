import { useFetchUsers } from "./useFetchUsers.tsrx";

export function App() {
  const data = useFetchUsers();

  return <>
    if (data.isLoading) {
      <p>"正在获取用户信息……"</p>
    } else if (data.error) {
      <p>"获取用户信息出错"</p>
    } else if (data.users) {
      <ul>
        for (const user of data.users; key user.login.uuid) {
          <li>
            <img src={user.picture.thumbnail} alt="用户" />
            <p>{user.name.first}" "{user.name.last}</p>
          </li>
        }
      </ul>
    }
  </>;
}
