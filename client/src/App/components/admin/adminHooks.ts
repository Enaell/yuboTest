import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../apiClient/ApiClient";
import { UserType } from "../common/types";


export function useUsers() {
  const [users, setUsers] = useState([] as UserType[]);

  const admin = useSelector((state: any) => state.user as UserType)
  
  useEffect(() => {
    userApi.getAllUsers(admin?.token).then(us => {
      console.log(us);
      setUsers(us);
    });
  }, []);



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