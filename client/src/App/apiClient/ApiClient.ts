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
  updateUserAvaliability: async (user: UserType, token?: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${user.id}/availability`,{
        headers: token ? {
        'Authorization': `Token ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      } : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        method:"PATCH",
        body: JSON.stringify({
          isDeleted: !user.isDeleted
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
      return [] as any;
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
  getAllMedia: async (id?: number, token?: string) => {
    const getUserUrl = `http://localhost:5000/api/users/${id}/media`
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

  deleteMedia: async (id?: number, mediaId?: number, token?: string) => {
    if (!id || !mediaId)
      return
    const getUserUrl = `http://localhost:5000/api/users/${id}/medias/:${mediaId}`
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
      method:"DELETE"
    })
    const json = await res.json();
    return json as any;
  },

}

