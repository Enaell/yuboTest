import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../apiClient/ApiClient";
import { MediaType, MessageType, UserType } from "../common/types";


export function useUserList() {
  const [users, setUsers] = useState([] as UserType[]);

  const [filteredUsers, setFilteredUsers] = useState([] as UserType[])

  const [filter, setFilter] = useState('');

  const admin = useSelector((state: any) => state.user as UserType)
  
  useEffect(() => {
    userApi.getAllUsers(admin?.token).then(us => {
      setUsers(us);
    });
  }, [])

  useEffect(() => {
    userApi.getAllUsers(admin?.token).then(us => {
      updateFilter(filter);
    });
  }, [users]);

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

  async function updateUser(userUpdated:UserType) {
    
    // console.log(userUpdated)
    // const newUsers = users.map(user => user.id === userUpdated.id ? userUpdated: user);
    // setUsers(newUsers)
    
    const us =  await userApi.getAllUsers(admin?.token)
    console.log(us);
    setUsers(us);
    updateFilter(filter);
  }

  useEffect(()=> {
    updateFilter(filter)
  }, [filter])

  return {users: filteredUsers, filter, setFilter, updateUser};
}

export function useUserSelected() {

  const [userSelected, setUserSelected] = useState(undefined as UserType | undefined);

  const [userMessages, setUserMessages] = useState(undefined as MessageType[] | undefined);
  const [receivedMessages, setReceivedMessages] = useState(undefined as MessageType[] | undefined);

  const [medias, setMedias] =useState(undefined as MediaType[] | undefined);

  useEffect(()=> {
    userApi.getAllMessages(userSelected?.id).then(ms => setUserMessages(ms));
    userApi.getAllReceivedMessages(userSelected?.id).then(rms => setReceivedMessages(rms));
    userApi.getAllMedia(userSelected?.id).then(m=>setMedias(m))
  }, [userSelected])

  function deleteMedia(mediaId: number) {
    userApi.deleteMedia(userSelected?.id, mediaId);
    setMedias(medias?.filter(media => media.id !== mediaId));
  }

  return {userSelected, setUserSelected, userMessages, receivedMessages, medias, deleteMedia}
}