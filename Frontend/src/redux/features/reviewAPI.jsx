import { API_URL } from "../../Components/API.jsx"
const token = localStorage.getItem('token')
export function fetchItems(id) {

    return fetch(`${API_URL}/api/v1/products/${id}/reviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

}

export function addItem(id,commentBody) {
    return fetch(`${API_URL}/api/v1/products/${id}/reviews`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        'Authorization': `Bearer ${token}`
        },
        body:commentBody
    })
}
export function updateItem( itemId , commentBody ){
  return fetch(`${API_URL}/api/v1/products/${itemId}/reviews`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      'Authorization': `Bearer ${token}`
      },
      body:commentBody
  })
}

export function deleteItem({itemId}){
   return fetch(`${API_URL}/api/v1/carts/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
  }
