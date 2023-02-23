import useFetchUsers from "./useFetchUsers";

export default function App() {
  const { isLoading, error, data: users } = useFetchUsers();

  return (
    <>
      {isLoading ? (
        <p>正在获取用户信息</p>
      ) : error ? (
        <p>获取用户信息出错</p>
      ) : (
        users && (
          <ul>
            {users.map((user) => (
              <li key={user.login.uuid}>
                <img src={user.picture.thumbnail} alt="user" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}
