Author: Karen Kurginyan
Date: 02.08.2024

# Sum_two_nums. NestJS forRoot / forFeature Pattern

## Description

This project demonstrates the implementation of two NestJS modules following the forRoot / forFeature pattern, similar to the functionality in the @nestjs/mongoose package. The logic involves adding numbers provided through the configuration in both the root and feature modules.

## Installation

1. Clone the repository

   ```bash
   https://github.com/KarenKuro/sum_two_nums.git
   ```

2. Install dependencies

   ```bash
   $ npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   GLOBAL_NUMBER=10 # Base number used in the forRootAsync method
   SECOND_NUMBER=20  # Second number used in the forFeatureAsync method
   ```

## Running the Project

To start the application in development mode, use the following command:

```bash
# development
$ npm run start
```

## Test the API

The application exposes a single endpoint for testing the addition operation:

GET /addition/sum

Example Request

```bash
curl http://localhost:3000/addition/sum
```

Example Response
{
"result": 88
}

GitHub repository: https://github.com/KarenKuro/sum_two_nums
