var Api = {
  SignUp(data){
    return fetch('https://reqres.in/api/users',{
      method: 'POST',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(data),
    }).then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  }
}
export default Api;
