import http from "../http-common";

class ConsultantService {
  getAll() {
    return http.get("/consultant/all");
  }

  get(id) {
    return http.get(`/consultant/${id}`);
  }

  create(data) {
    return http.post("/consultant/create", data);
  }

  update(id, data) {
    return http.put(`/consultant/update${id}`, data);
  }

  delete(id) {
    return http.delete(`/consultant/delete/${id}`);
  }
}

export default new ConsultantService();