export interface IUser {
  id: number,
  name: {
    firstname: string,
    lastname: string,
  },
  username: string,
  email: string, 
  password: string,
  phone: string,
  address: {
    geolocation: {
      lat: string,
      long: string,
    },
    city: string,
    street: string,
    number: number,
    zipcode: string
  },
  __v: number,
}
