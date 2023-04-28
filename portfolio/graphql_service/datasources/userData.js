import { RESTDataSource } from '@apollo/datasource-rest';

class UserAPI extends RESTDataSource {
    baseURL = `${process.env.USER_SERVICE}`;

    constructor(props) {
        super();
        this.token = props.token;
        this.user = props.user
    }
    

    async getUsers(){
        return await this.get('/users', {headers: {'Authorization': this.token}});
    };

    async getSingleUser(id){
        return await this.get(`/get-single-user/${id}`, {headers: {'Authorization': this.token}});
    };

    async deleteUser(id){
        return await this.delete('/delete-user',{body: {id}, headers: {'Authorization': this.token}});
    };

    async createUser(email, password){
        return await this.post('/add-user',{body: {email, password}});
    };

    async editUser(id, email, password){
        return await this.post('/edit-user',{body: {id, email, password}, headers: {'Authorization': this.token}});
    };

    async authUser(email, password){
        return await this.post('/auth-user',{body: {email, password}});
    };
}


export default UserAPI;