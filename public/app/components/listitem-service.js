// @ts-ignore
let api = axios.create({
  baseURL: "/api/listitems"
})

let _listitems = []

// function handleError(err) {
//   throw new Error(err)
// }

export default class ListItemService {
  delete(id, draw) {
    api.delete(id).then(res => this.getListitems(draw))
  }
  getListitems(cb) {
    api.get('').then(res => {
      console.log(res.data)
      _listitems = res.data
      cb()
    })
  }
  get listitems() {
    return _listitems
  }
  postNewItem(formData, fnToRunOnSuccess) {
    console.log(formData)
    api.post('', formData)
      .then(res => {
        //tell me via a callback 
        this.getListitems(fnToRunOnSuccess)
      }) // successful
      .catch(console.log("error"))

  }
}