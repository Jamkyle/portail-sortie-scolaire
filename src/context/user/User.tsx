import { FC, createContext, useState } from "react";

export const UserContext = createContext<UserContext>({
  user: null,
  setUser: () => {},
});



export const UserProvider: FC<ComponentProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
