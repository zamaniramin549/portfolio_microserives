import { RESTDataSource } from '@apollo/datasource-rest';

class CategoryAPI extends RESTDataSource {
    baseURL = `${process.env.CATEGORY_SERVICE}`;

    constructor(props) {
        super();
        this.token = props.token;
        this.user = props.user
    }


    async getCategories() {
        return await this.get('/get-categories');
    }

    async addCategory(name) {
        return await this.post('/add-category', {body: {name}, headers: {'Authorization': this.token}});
    }

    async deleteCategory(id) {
        return await this.delete('/delete-category', {body: {id}, headers: {'Authorization': this.token}});
    }

    async editCategory(id, name) {
        return await this.put(`/edit-category/${id}`, {body: {name}, headers: {'Authorization': this.token}});
    }

    async getSingleCatgeory(id) {
        return await this.get(`/get-single-category/${id}`);
    }
}


export default CategoryAPI;