# Server API Documentation

Following is the supported API for MIU_Pro_Jobs server.

- [ ] [Authentication API](#authentication-api)
- [ ] [Listing API]()
- [ ] [Submission API]()
- [ ] [Candidate API]()
- [ ] [Profile API]()

## Authentication API

In MIUProJobs, authentication is for recruiters to access to the dashboard. Following are supported end-points.

- [Register](#register-apiauthregister)
- [Login](#login-apiauthlogin)

### Register: `/api/auth/register`

Access: **PUBLIC**

Method: **POST**

Header: 
```
Content-Type: application/json
```

Request Body:

```
{
	"name" : string,
	"email": string,
	"password": string"
}
```

For example:

```
> POST /auth/register HTTP/1.1
> Host: localhost:3000
> User-Agent: insomnia/7.0.3
> Content-Type: application/json
> Accept: */*
> Content-Length: 85

| {
| 	"name" : "Bereket Abraham",
| 	"email": "babraham@mum.edu",
| 	"password": "1234"
| }
```

### Login: `/api/auth/login`

Access: **PUBLIC**

Method: **POST**

Headers:

```
Content-Type: application/json
```

Request Body:

```
{
	"email": string,
	"password": string
}
```

For example:

```
> POST /auth/login HTTP/1.1
> Host: localhost:3000
> User-Agent: insomnia/7.0.3
> Content-Type: application/json
> Accept: */*
> Content-Length: 61

| {
| 	"email": "babraham@mum.edu",
| 	"password": "1234"
| }
```


## Listing API

TBD.

## Submission API

TBD.s

## Candiate API

TBD.

## Profile API

TBD.
