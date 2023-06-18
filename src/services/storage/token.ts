const USER_TOKEN = 'userToken'

export const getToken = () => {
  const response = window.localStorage.getItem(USER_TOKEN)
  return response
}
export const setToken = (token: string) => {
  window.localStorage.setItem(USER_TOKEN, token)
}

export const removeToken = () => {
  window.localStorage.removeItem(USER_TOKEN)
}
