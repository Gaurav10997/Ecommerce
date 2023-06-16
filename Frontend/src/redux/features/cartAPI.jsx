import { API_URL } from "../../Components/API.JSX"
const token = localStorage.getItem('token')
console.log(token);
export function fetchItems() {

    return fetch(`${API_URL}/api/v1/carts/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

}

export function addItem(itemID) {
    return fetch(`${API_URL}/api/v1/carts/${itemID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
}
export function updateItem( {itemId , count} ){
  console.log(itemId,count)
  return fetch(`${API_URL}/api/v1/carts/${itemId}`, {
    method: 'PATCH',
    body: JSON.stringify({
     count
  }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
}

export function deleteItem(id){
   return fetch(`${API_URL}/api/v1/carts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
  }
