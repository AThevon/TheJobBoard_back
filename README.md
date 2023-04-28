# The Job Board (Backend)

This project is the backend for a job board website that uses MongoDB Atlas as the database. 
It was built using Node.js, and it uses various libraries such as `dotenv`, `nodemon`, and `mongoose`.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository.
2. Run `npm install` to install all the dependencies.
3. Create a `.env` file with your MongoDB Atlas connection string (you can find this in your Atlas dashboard).
4. Run `npm run dev` to start the server. (Running on port 3001)

## API Endpoints

The API has several endpoints, including:

- `GET /offers`: Returns a list of all job offers in the database.
- `GET /search`: Returns a list of job offers that match the specified search query.
- `GET /offers/:id`: Returns a specific job offer by ID.
- `POST /offers`: Creates a new job offer in the database.
- `PUT /offers/:id`: Updates an existing job offer by ID.
- `DELETE /offers/:id`: Deletes an existing job offer by ID.

## Data Schema

The job offer data is structured using a Mongoose schema, which includes the following fields:

- `company` (String, required): The name of the company offering the job.
- `logo` (String, required): A URL pointing to the company's logo.
- `logoBackground` (String, required): The background color of the logo (in hex format).
- `position` (String, required): The job title.
- `postedAt` (Date, default: `Date.now`): The date the job offer was posted.
- `contract` (String, required): The type of contract (e.g. full-time, part-time, internship).
- `location` (String, required): The location of the job (e.g. city, state, country).
- `website` (String, required): A URL pointing to the company's website.
- `apply` (String, required): A URL pointing to the application page for the job offer.
- `description` (String, required): A description of the job.
- `requirements` (Object): An object containing two fields:
  - `content` (String): A description of the requirements for the job.
  - `items` (Array): An array of strings representing individual requirements for the job.
- `role` (Object): An object containing two fields:
  - `content` (String): A description of the role of the job.
  - `items` (Array): An array of strings representing individual responsibilities for the job.

The schema is also indexed for text search on the `position` and `company` fields.

## Known Issues and Future Development

There are currently no known issues with the API, but some future plans for development include:

- Adding pagination to the job offer endpoint.
- Improving the search algorithm.
- Adding more data validation to the job offer schema.

---

_Icons made by [Freepik](https://www.freepik.com) and [Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect) from [Flaticon](https://www.flaticon.com/)_

