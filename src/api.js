export const fetchUsers = () => {
  return fetch('https://venbest-test.herokuapp.com/')
      .then(response => {

    if(!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`)
    }

    return response.json()});
}
