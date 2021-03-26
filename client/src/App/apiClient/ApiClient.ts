import { UserType } from "../components/common/types";

export const userApi = {
  getAllUsers: async (token?: string) => {
    const getUserUrl = `http://localhost:5000/api/users`
    const res = await fetch(getUserUrl,
    {
      headers: token ? {
      'Authorization': `Token ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    } : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method:"GET"
    })
    const json = await res.json();
    return json as UserType[]
  },
  updateUser: async (user: UserType, token?: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/${user.id}`,{
        headers: {
          'Authorization': `Token ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:"PATCH",
        body: JSON.stringify({
          user
        })
      });
      const json = await res.json();
      return json as UserType;
    } catch (error) {
      console.log(error);
      return {} as UserType;
    }
  },
  getAllMessages: async (id?: number, token?: string) => {
    if (!id)
      return
    const getUserUrl = `http://localhost:5000/api/users/${id}/messages`
    const res = await fetch(getUserUrl,
    {
      headers: token ? {
      'Authorization': `Token ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    } : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method:"GET"
    })
    const json = await res.json();
    return json as any;
  },
  getAllReceivedMessages: async (id?: number, token?: string) => {
    if (!id)
      return
    const getUserUrl = `http://localhost:5000/api/users/${id}/messagereceived`
    const res = await fetch(getUserUrl,
    {
      headers: token ? {
      'Authorization': `Token ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    } : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      method:"GET"
    })
    const json = await res.json();
    return json as any;
  },

}

