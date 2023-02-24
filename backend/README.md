# Skill Taxonomy PoC V2 Backend
## Database Setup
To run the server, you first need to set up the database:
1. Download the .dump file from the `/db` folder
2. Create a new project in Neo4j Desktop
3. Add the .dump file to this project and then select 'Create new DBMS from dump'
4. When prompted, set the DBMS password to '1234'; if you would like to set a different password, you also need to change the DB_PASSWORD variable in the .env file
5. Open the newly created database and ensure that there is a single Taxonomy node and several Skill and SkillCategory nodes

## Run the Backend Locally
To run the backend locally, first make sure that your database is running. Next, rename the .env.template file to .env. Finally, run the following command to start the backend:
```bash
> npm start
```