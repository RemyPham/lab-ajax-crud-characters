class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl
    })
  }
  
  getFullList () {
    return this.api.get("/characters");
  }

  getOneRegister (id) {
    return this.api.get("/characters/"+ id);
  }

  createOneRegister (character) {
    return this.api.post("/characters", character);
  }

  updateOneRegister (character) {
    return this.api.patch(`/characters/${character.id}`, character);
  }

  deleteOneRegister (id) {
    return this.api.delete("/characters/"+ id);
  }
}

export default APIHandler;