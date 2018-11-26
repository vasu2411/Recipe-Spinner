const END_POINT = 'http://192.168.0.10:1337/'

var Api = {
  SignUp(data){
    return fetch(END_POINT+'signUp',{
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
  },

  recipe(){
    return fetch(END_POINT+'getRecipe',{
      method: 'GET',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
    }).then((response) => response.json());
  }

}
export default Api;
