//Адаптер. абстракція для http клієнта, хелпер. Зручно міняти на axios, мігрувати в інший проект
class HttpClient {
    get(url, params) {
        return fetch(url, params)
    }
}

//singletone
export const httpClient = new HttpClient();
