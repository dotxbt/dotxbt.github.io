export class ProductService {
  getProducts = async (path) => {
    return fetch("../../data/" + path + ".json")
      .then((res) => res.json())
      .catch((_) => {
        return [];
      });
  };
}
