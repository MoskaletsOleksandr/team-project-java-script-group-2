function setLocalStorage(status, object) {
   return localStorage.setItem(`${status}`, JSON.stringify(object))
}

