import BaseService from '../BaseService';
import { Product } from '../Types/Product';

class ProductsService extends BaseService {
  constructor() {
    super();
  }
  async getCategories() {
    return await this.get<string>('/products/categories');
  }
  async getProducts() {
    return await this.get<Product>('/products/');
  }
}

export default new ProductsService();
