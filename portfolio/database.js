
print('Start #################################################################');

db.auth('admin', 'lizardpassword');

db = db.getSiblingDB('projects');
db.createUser({
    user:'project_service',
    pwd:'password',
    roles: [{
        role:'readWrite',
        db:'projects'
    }]
})


db = db.getSiblingDB('category');
db.createUser({
    user:'category_service',
    pwd:'password',
    roles: [{
        role:'readWrite',
        db:'category'
    }]
})



db = db.getSiblingDB('blog');
db.createUser({
    user:'blog_service',
    pwd:'password',
    roles: [{
        role:'readWrite',
        db:'blog'
    }]
})



db = db.getSiblingDB('skill');
db.createUser({
    user:'skill_service',
    pwd:'password',
    roles: [{
        role:'readWrite',
        db:'skill'
    }]
})


db = db.getSiblingDB('user');
db.createUser({
    user:'user_service',
    pwd:'password',
    roles: [{
        role:'readWrite',
        db:'user'
    }]
})



print('END #################################################################');