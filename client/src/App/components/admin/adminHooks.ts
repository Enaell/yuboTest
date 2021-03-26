import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../apiClient/ApiClient";
import { MessageType, UserType } from "../common/types";


export function useUserList() {
  const [users, setUsers] = useState([] as UserType[]);

  const [filteredUsers, setFilteredUsers] = useState([] as UserType[])

  const [filter, setFilter] = useState('');

  const admin = useSelector((state: any) => state.user as UserType)
  
  useEffect(() => {
    userApi.getAllUsers(admin?.token).then(us => {
      console.log(us);
      setUsers(us);
      setFilteredUsers(us);
    });
  }, []);

  function updateFilter(f: string) {
    setFilteredUsers(users.filter(user => {
      const rgxp = new RegExp(f.toLowerCase());
      const city = user.city?.toLocaleLowerCase();
      const country = user.country?.toLocaleLowerCase();
      const name = user.name?.toLocaleLowerCase();
      const username = user.username?.toLocaleLowerCase();
      return city?.match(rgxp) || country?.match(rgxp) || name?.match(rgxp) || username?.match(rgxp)
    }))
  }

  useEffect(()=> {
    updateFilter(filter)
  }, [filter])

  async function updateUser(updatedUser: UserType) {
    
    // if (updatedUser.name){
    //   const newUsers = usersByPerson[user.username].map(user => user.id === updatedUser.id ? updatedUser: user);
    
    // setUsersByPerson({...usersByPerson, [user.username]: newUsers})
    // if (user.token)
    //   await userApi.updateUser(updatedUser, user.token);
    // }
  }


  return {users: filteredUsers, filter, setFilter, updateUser};
}

export function useUserSelected() {

  const [userSelected, setUserSelected] = useState(undefined as UserType | undefined);

  const [userMessages, setUserMessages] = useState(undefined as MessageType[] | undefined);
  const [receivedMessages, setReceivedMessages] = useState(undefined as MessageType[] | undefined);

  useEffect(()=> {
    console.log(receivedMessages);
  }, [receivedMessages])

  useEffect(()=> {
    userApi.getAllMessages(userSelected?.id).then(ms => setUserMessages(ms));
    userApi.getAllReceivedMessages(userSelected?.id).then(rms => setReceivedMessages(rms))
  }, [userSelected])

  return {userSelected, setUserSelected, userMessages, receivedMessages}
}