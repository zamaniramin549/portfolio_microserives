import { RESTDataSource } from '@apollo/datasource-rest';

class SkillAPI extends RESTDataSource {
    baseURL = `${process.env.SKILL_SERVICE}`;

    async getSkills(){
        return await this.get('/get-skills');
    };

    async getSingleSkill(id){
        return await this.get(`/get-skill/${id}`);
    };

    async addSkill(name, content, image){
        return await this.post('/add-skill', {body: {name, content, image}});
    };

    async deleteSkill(id){
        return await this.delete('/delete-skill', {body: {id}});
    };

    async editSkill(id, name, content, image){
        return await this.put(`/edit-skill/${id}`, {body: {name, content, image}});
    };
}


export default SkillAPI;