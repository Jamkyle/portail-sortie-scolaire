import { FC, createContext, useEffect, useState } from "react";

export const UserContext = createContext<UserContext>({
  user: null,
  setUser: () => {},
});

export const UserProvider: FC<ComponentProps> = ({ children }) => {
  const [user, setUser] = useState<User>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
