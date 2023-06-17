module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Task API',
    version: '1.0.0',
    description: 'API documentation for managing tasks',
  },
  paths: {
    '/task': {
      post: {
        summary: 'Create a new task',
        tags: ['Tasks'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    required: true,
                  },
                  description: {
                    type: 'string',
                  },
                  completed: {
                    type: 'boolean',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Task created successfully',
          },
        },
      },
    },
    '/tasks': {
      get: {
        summary: 'Get all tasks',
        tags: ['Tasks'],
        responses: {
          200: {
            description: 'Successful operation',
          },
        },
      },
    },
    '/tasks/{id}': {
      get: {
        summary: 'Get a task by ID',
        tags: ['Tasks'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'ID of the task',
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
          },
        },
      },
      patch: {
        summary: 'Update a task by ID',
        tags: ['Tasks'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'ID of the task',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                  },
                  description: {
                    type: 'string',
                  },
                  completed: {
                    type: 'boolean',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Task updated successfully',
          },
        },
      },
      delete: {
        summary: 'Delete a task by ID',
        tags: ['Tasks'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string',
            },
            required: true,
            description: 'ID of the task',
          },
        ],
        responses: {
          204: {
            description: 'Task deleted successfully',
          },
        },
      },
    },
  },
}
