export function saveLocalStorage(key, value) {
  try {localStorage.setItem(key, JSON.stringify(value));}
  catch {console.log(error);}
}
// функція повертає інформацію про обєкт із сховища
export  function loadLocalStorage(key) {
  try {const get = localStorage.getItem(key);
    return parse = JSON.parse(get);}
  catch {console.log(error);}
}

