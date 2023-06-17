# **Task Management API**

This is a simple API for managing tasks in a task management application. It provides endpoints to create, read, update, and delete tasks.

## API Documentation

### Create a task

**Request**

`POST /task`

**Body**

| Name          | Type      | Description                          |
| ------------- | --------- | ------------------------------------ |
| `title`       | `string`  | **Required**. The title of the task. |
| `description` | `string`  | The description of the task.         |
| `completed`   | `boolean` | The status of the task.              |

**Response**

```json
{
  "completed": false,
  "id": "5f1b5b5b5b5b5b5b5b5b5b5b",
  "title": "Task 1",
  "description": "This is task 1"
}
```

### Get all tasks

**Request**

`GET /tasks`

**Response**

```json
[
  {
    "completed": false,
    "id": "5f1b5b5b5b5b5b5b5b5b5b5b",
    "title": "Task 1",
    "description": "This is task 1"
  },
  {
    "completed": false,
    "id": "5f1b5b5b5b5b5b5b5b5b5b5b",
    "title": "Task 2",
    "description": "This is task 2"
  }
]
```

### Get a task

**Request**

`GET /tasks/:id`

**Response**

```json
{
  "completed": false,
  "id": "5f1b5b5b5b5b5b5b5b5b5b5b",
  "title": "Task 1",
  "description": "This is task 1"
}
```

### Update a task

**Request**

`PATCH /tasks/:id`

**Body**

| Name          | Type      | Description                  |
| ------------- | --------- | ---------------------------- |
| `title`       | `string`  | The title of the task.       |
| `description` | `string`  | The description of the task. |
| `completed`   | `boolean` | The status of the task.      |

**Response**

```json
{
  "completed": false,
  "id": "5f1b5b5b5b5b5b5b5b5b5b5b",
  "title": "Task 1",
  "description": "This is task 1"
}
```

### Delete a task

**Request**

`DELETE /tasks/:id`

**Response**

returns `204 No Content` if successful

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installing

1. Clone the repository

```bash
git clone https://github.com/aliffaizar/upscale-test.git
```

2. Install dependencies

```bash
cd upscale-test
npm install
```

3. Create a `.env` file in the root directory of the project and add the following environment variables

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/task-management
```

4. Start the server

```bash
npm start
```

## Running the tests

```bash
npm test
```

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ODM
- [Jest](https://jestjs.io/) - Testing framework
