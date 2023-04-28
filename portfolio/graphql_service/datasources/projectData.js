import { RESTDataSource } from '@apollo/datasource-rest';

class ProjectAPI extends RESTDataSource {
    baseURL = `${process.env.PROJECT_SERVICE}`;

    constructor(props) {
        super();
        this.token = props.token;
        this.user = props.user
    }

    async getProjects() {
        return await this.get('/projects');
    }

    async getCategories() {
        return await this.get('/categories');
    }

    async addProject(image, title, summary, content, category) {
        return await this.post('/add-project', {body: {image, title, summary, content, category}, headers: {'Authorization': this.token}});
    }

    async addProjectCategory(name) {
        return await this.post('/add-category', {body: {name}, headers: {'Authorization': this.token}});
    }

    async deleteProjectCategory(id) {
        return await this.delete('/delete-category', {body: {id}, headers: {'Authorization': this.token}});
    }

    async deleteProject(id) {
        return await this.delete('/delete-project', {body: {id}, headers: {'Authorization': this.token}});
    }

    async editProjectCategory(id, name) {
        return await this.put(`/edit-category/${id}`, {body: {name}, headers: {'Authorization': this.token}});
    }

    async editProject(id, image, title, summary, content, category) {
        return await this.put(`/edit-project/${id}`, {body: {image, title, summary, content, category}, headers: {'Authorization': this.token}});
    }

    async getSingleProject(id){
        return this.get(`/project/${id}`);
    }

    async getProjectsByCategory(id){
        return this.get(`/project-by-id?id=${id}`);
    }

}


export default ProjectAPI;