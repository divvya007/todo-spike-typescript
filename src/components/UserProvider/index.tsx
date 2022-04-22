import { useState, createContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type User = {
  userName: string;
};

// to query context state
const UserContext = createContext<User | undefined>(undefined);
// to mutate context state
const UserDispatchContext = createContext<
  React.Dispatch<React.SetStateAction<User>> | undefined
>(undefined);

export default function UserProvider({ children }: Props) {
  const [userDetails, setUserDetails] = useState({ userName: "John Doe" });
  // Provider encapsulates -component that only needs the context state
  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
