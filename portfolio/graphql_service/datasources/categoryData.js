import { RESTDataSource } from '@apollo/datasource-rest';

class CategoryAPI extends RESTDataSource {
    baseURL = `${process.env.CATEGORY_SERVICE}`;

    async getCategories() {
        return await this.get('/get-categories');
    }

    async addCategory(name) {
        return await this.post('/add-category', {body: {name}});
    }

    async deleteCategory(id) {
        return await this.delete('/delete-category', {body: {id}});
    }

    async editCategory(id, name) {
        return await this.put(`/edit-category/${id}`, {body: {name}});
    }

    async getSingleCatgeory(id) {
        return await this.get(`/get-single-category/${id}`);
    }
}


export default CategoryAPI;