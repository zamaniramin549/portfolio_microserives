import { RESTDataSource } from '@apollo/datasource-rest';

class SkillAPI extends RESTDataSource {
    baseURL = `${process.env.SKILL_SERVICE}`;


    constructor(props) {
        super();
        this.token = props.token;
        this.user = props.user
    }

    async getSkills(){
        return await this.get('/get-skills');
    };

    async getSingleSkill(id){
        return await this.get(`/get-skill/${id}`);
    };

    async addSkill(name, content, image){
        return await this.post('/add-skill', {body: {name, content, image}, headers: {'Authorization': this.token}});
    };

    async deleteSkill(id){
        return await this.delete('/delete-skill', {body: {id}, headers: {'Authorization': this.token}});
    };

    async editSkill(id, name, content, image){
        return await this.put(`/edit-skill/${id}`, {body: {name, content, image}, headers: {'Authorization': this.token}});
    };
}


export default SkillAPI;