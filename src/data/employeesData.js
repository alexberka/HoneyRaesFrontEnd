const _apiUrl = "/api/employees";

export const getEmployees = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getEmployeeById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}
