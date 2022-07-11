<h1 align="center">
   Feedback API
</h1>

# Feedget
App developed to collect feedback from your applications. The project collects user feedback on issues, gives suggestions for ideas, and more

## Technologies used
  - [Node](https://nodejs.org/en)
  - [Express](https://expressjs.com/pt-br)
  - [Prisma](https://www.prisma.io)
  - [Sqlite](https://www.sqlite.org)

## Requirements

You need to install both [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com) or npm to run this project.

## Public Routes
```bash
  # Create Feedback
  # METHOD POST
  /feedbacks

  # required fields
  {
  	"type": "BUG",
	  "comment": "Está tudo bugado"
  }

  # fields are not required
  {
    "screenshot": "image.jpg" # campo não é obrigátorio
  }

  # return
  {
	"data": {
		"id": "87bc7c1c-b854-4805-837d-b0972e4d638e",
		"type": "BUG",
		"comment": "Está tudo bugado",
		"screenshot": null
	}
}
```

## How to use it

```bash
  # Install the dependencies
  $ yarn install
  # Run the web server
  $ yarn dev
```

The app will be available for access on your browser at (http://localhost:3333)
