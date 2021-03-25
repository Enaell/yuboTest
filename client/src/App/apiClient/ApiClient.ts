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
    console.log('api client gift update gift');
    console.log(user);
    try {
      if (!user.name)
       return {success: false, message: 'gift has no name'};
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
      return {success: true, message: json};
    } catch (error) {
      console.log(error);
      return {success: false, message: error.message}
    }
  },
}

