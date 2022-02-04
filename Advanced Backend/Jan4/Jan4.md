# Define the following for stack overflow(refer https://stackoverflow.com/)

a. Functional requirements

- User CRUD along with authentication
- Questions CRUD
- Answers CRUD
- Upvote Option for Users

b. Non functional requirements 
- Searching question should be fast
- It should be scalable
- Highly available
- Database backup for disaster management

c. Additional requirements
- Login through difference devices can be done
- Login through difference social netwok and mail providers can be done

d. Entities and attributes of the database schema

- Users schema
id, username, email_id, phone_no

- Questions schema
id, question_title,question_body, created by (username), created_at (date), , updated_at(date)

- Answers schema
id, answer_body, answer_by(username),
created_at(date), updated_at(date)

