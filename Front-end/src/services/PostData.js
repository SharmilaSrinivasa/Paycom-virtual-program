export function PostData(type, userData) {
  let BaseURL = "http://localhost:8080/react-php/api/index.php";

  return new Promise((resolve, reject) => {
    fetch(BaseURL + type, {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
