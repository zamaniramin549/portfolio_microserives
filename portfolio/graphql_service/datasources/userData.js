import { RESTDataSource } from '@apollo/datasource-rest';

class UserAPI extends RESTDataSource {
    baseURL = `${process.env.USER_SERVICE}`;

    async getUsers(){
        return await this.get('/users');
    };

    async getSingleUser(id){
        return await this.get(`/get-single-user/${id}`);
    };

    async deleteUser(id){
        return await this.delete('/delete-user',{body: {id}});
    };

    async createUser(email, password){
        return await this.post('/add-user',{body: {email, password}});
    };

    async editUser(id, fullName, email, password){
        return await this.put(`/edit-user/${id}`,{body: {fullName, email, password}});
    };

    async authUser(email, password){
        return await this.post('/auth-user',{body: {email, password}});
    };
}


export default UserAPI;