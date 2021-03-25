import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../apiClient/ApiClient";
import { UserType } from "../common/types";


export function useAdmin() {
  const [users, setUsers] = useState([] as UserType[]);

  const user = useSelector((state: any) => state.user as UserType)
  
  useEffect(() => {
    userApi.getAllUsers(user?.token).then(us => {
      console.log(us)
    });
  }, [user]);



  async function updateUser(updatedUser: UserType) {
    
    // if (updatedUser.name){
    //   const newUsers = usersByPerson[user.username].map(user => user.id === updatedUser.id ? updatedUser: user);
    
    // setUsersByPerson({...usersByPerson, [user.username]: newUsers})
    // if (user.token)
    //   await userApi.updateUser(updatedUser, user.token);
    // }
  }


  return {users, updateUser};
}