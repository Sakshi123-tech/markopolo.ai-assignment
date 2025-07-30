Project: URL Shortener Service
Description: A RESTful URL shortener built with NestJS and MongoDB and Mongoose. It supports custom short codes, redirect logic, click analytics. Bonus features include protected endpoints, user URL tracking, and full Docker setup. The service allows users to:

Shorten long URLs with or without a custom short code.
Redirect short URLs to their original URLs.
Track the number of times a short URL was accessed.
(Bonus) Run the service in Docker with MongoDB.


Features
✅ Shorten long URLs
✅ Redirect to original URLs
✅ View analytics (click count)
✅ Swagger API documentation
✅ Environment configuration using .env
✅ Error handling and validation
✅ (Bonus) Dockerized setup


setup & Running Instructions:
•	Clone repo and install dependencies: npm install
•	Create .env file with DB and JWT secrets
•	Run locally: npm run start:dev
•	With Docker: docker-compose up  --build

•	API Endpoints Overview:
•	POST /api/shorten – Shortens long URLs
   Request Body: --- {
  "url": "https://example.com/very/long/link",
  "customCode": "mycustomcode"  //--- optional
   }
   Response (201 Created)---{
  "originalUrl": "https://example.com/very/long/link",
  "shortUrl": "http://localhost:3000/r/mycustomcode" 
   }


•	GET /r/:shortCode – Redirects to original URL
•	GET /api/stats/:shortCode – Returns analytics 
     Response---{
     "originalUrl": "https://example.com/very/long/link",
     "shortUrl": "http://localhost:3000/r/mycustomcode",
    "clicks": 5
     }


Bonus Features Implemented:
•	 Dockerized backend
•	 Rate limiting with @nestjs/throttler
•	 Swagger integration
•	Video Explanation:https://drive.google.com/file/d/1fxlrf2rqDPziQgzARz9O7nvK-svsZaqE/view

Swagger Documentation
•	Tool Used: @nestjs/swagger
•	Features:
	Auto-generated OpenAPI spec,
	Interactive UI for testing endpoints,
	Descriptions for request bodies, responses, and status codes

•	Project: URL Shortener Service
•	🔗 Live Deployment: https://markopolo-ai-assignment-nkhx.onrender.com
•	📘 Swagger API Docs: https://markopolo-ai-assignment-nkhx.onrender.com/docs
•	📂 GitHub Repository: https://github.com/Sakshi123-tech/markopolo.ai-assignment



