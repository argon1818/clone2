export enum Role {
    User = 'User',
    Admin = 'Admin'
  }
  
export interface UserViewModel{
  access_token:string,
  user_info:{
    user_id: string,
    roles:string
  }
}
