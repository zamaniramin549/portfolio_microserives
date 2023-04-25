import { RESTDataSource } from '@apollo/datasource-rest';

class BlogAPI extends RESTDataSource {
    baseURL = `${process.env.BLOG_SERVICE}`;

    async addBlog(image, summery, content, category, title){
        return await this.post('/add-blog', {body: {image, summery, content, category, title}})
    }

    async editBlog(id, image, summery, content, category, title){
        return await this.put(`/edit-blog/${id}`, {body: {image, summery, content, category, title}})
    }

    async getBlog() {
        return await this.get('/blogs');
    }

    async getSingleBlog(id) {
        return await this.get(`/blog/${id}`);
    }

    async deleteBlog(id) {
        return await this.delete('/delete-blog', {body: {id}});
    }

}


export default BlogAPI;