# Backend

```bash
npx sequelize-cli init

npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,image:string,address:string,age:integer,education:string,gender:string,organization:string,work_exp:string

npx sequelize-cli model:generate --name post --attributes title:string,textPost:text,userId:integer,image:string

npx sequelize-cli db:create

npx sequelize-cli db:migrate

```
