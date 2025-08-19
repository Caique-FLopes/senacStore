export default class Service {
  // public async get<T>(): T | T[] {

  // }
  public static async post<T>(url: string, data: any): Promise<T> {
    const respose = await fetch(`https://fakestoreapi.com${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await respose.json();
    return json;
  }
}
