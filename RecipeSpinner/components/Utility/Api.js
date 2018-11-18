var Api = {
  SignUp(data){
    return fetch('http://192.168.0.10:1337/signUp',{
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
  },
  Login(data){
    return fetch('http://192.168.0.10:1337/login',{
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
