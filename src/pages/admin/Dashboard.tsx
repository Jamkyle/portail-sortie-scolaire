import { useContext, useEffect, useState } from "react";
import api from "@/config/api.json";
import { UserContext } from "@/context/user/User";

type UserList = UserResponse[];
type UserResponse = {
  "@id": string;
  "@type": string;
  email: string;
  id: number;
  roles: string[];
};
const DashBoard = () => {
  const { user } = useContext(UserContext);
  const [usersList, setUsersList] = useState<UserList>([]);
  useEffect(() => {
    fetch(`${api.url}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        setUsersList(json?.["hydra:member"]);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <h3 className="text-4xl font-bold text-center text-amber-200">List des membres</h3>
      <ul>
        {usersList.map((user) => {
          return (
            <li key={user["@id"] + user["@type"]}>
              <span>{user.email}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default DashBoard;
