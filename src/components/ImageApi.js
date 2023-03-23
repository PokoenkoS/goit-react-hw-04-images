
function fetchImages(formValue, page){
    const API_KEY = '33261865-905999929b5f445e8a29b592f';
    return fetch(`https://pixabay.com/api/?q=${formValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Нет image ${formValue}`));
        })
   
}
const api ={
    fetchImages,
}

export default api;