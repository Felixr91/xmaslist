import ListitemService from './listitem-service.js'

let _liService = new ListitemService()

let listItems = _liService.listitems;

function draw() {
  let count = 1
  let template = ''
  _liService.listitems.forEach(item => {
    template += `
    <tr>
        <td>${count}</td>
        <td>${item.item}</td>
        <td>${item.url}</td>
        <td>${item.price}</td>
        <td><button <div onclick="app.controllers.listitemController.delete('${item._id}')"> Delete</button>
    </tr>
    `
    count += 1
  })
  document.getElementById('listitems').innerHTML = template
}

export default class ListitemController {
  constructor() {
    _liService.getListitems(draw)
  }

  delete(id) {
    _liService.delete(id, draw)
  }

  addItem(event) {
    event.preventDefault();
    let form = event.target // the element that triggers the event
    let formData = {
      name: document.getElementById("itemname").value,
      url: document.getElementById("url").value,
      price: document.getElementById("price").value
    }
    _liService.postNewItem(formData, draw())
  }
}