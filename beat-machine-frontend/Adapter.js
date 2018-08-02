class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/beats';
  }

  fetchBeats() {
    return fetch(this.baseUrl).then(res=>res.json());
  }

  updateBeat(id, body) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body),
    }).then(res=>res.json());
  }
}
