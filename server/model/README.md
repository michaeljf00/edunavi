# Data Types
All of the models are dynamically created as JSON objects. The required components 
are dependent on the values stored in MongoDB. 

I included examples of all JSON objects generated.

## Request

### LoginReq
Note: The password entered in this request should be encrypted accordingly.
```
{
    "email": "test@gmail.com",
    "password": "dklgnaasfjfb"
}
```
### LoginResp
```
{
    "valid": true
}
```
### RegisterReq
Note: The password entered in this request should be encrypted accordingly.
```
{
    "email": "test@gmail.com",
    "password": "dklgnaasfjfb"
}
```

### RegisterResp
```
{
    "valid": true
}
```
### CollegesReq
```
{
    "name": "Rensselaer Polytechnic Institute"
}
```
### CollegesResp
```
{"colleges":[
    {   
        "_id":"643724939231764ce9649018",
        "College_ID":1,
        "Name":"Rensselaer Polytechnic Institute",
        "USNews_Rank":51,
        "City":"Troy",
        "State":"NY",
        "State_Rank":7,
        "About_College":"This is a description.",
        "Current_Student":7616,
        "Admission_Deadline":"2023-01-05",
        "Acceptance_Rate":0.57,"Avg_Annual_Cost":73391,"Application_Site":"https://admissions.rpi.edu/",
        "Img_Path":"NULL\r"
    },
    ...
]}
```

### CollegeReq
```
{
    "id": 1
}
```

### CollegeResp
```
{   
    "_id":"643724939231764ce9649018",
    "College_ID":1,
    "Name":"Rensselaer Polytechnic Institute",
    "USNews_Rank":51,
    "City":"Troy",
    "State":"NY",
    "State_Rank":7,
    "About_College":"This is a description.",
    "Current_Student":7616,
    "Admission_Deadline":"2023-01-05",
    "Acceptance_Rate":0.57,"Avg_Annual_Cost":73391,"Application_Site":"https://admissions.rpi.edu/",
    "Img_Path":"NULL\r"
}
```

### CourseReq
```
{
    "id": 1
}
```

### CourseResp
```
{
    "_id":"643724c69231764ce964901e",
    "College_ID":1,
    "Program_ID":1,
    "Course_ID":1,
    "Course":"Computer Science",
    "About_Course":"Computer science is...",
    "Admission_Requirement":"https://admissions.rpi.edu/undergraduate/apply"
}
```

### CoursesReq
Program: 1=Undergraduate, 2=Graduate, 3=PhD
```
{
    "collegeID": 1,
    "programID": 1
}
```

### CoursesResp
```
{
    "courses": [
        {
            "_id":"643724c69231764ce964901e",
            "College_ID":1,
            "Program_ID":1,
            "Course_ID":1,
            "Course":"Computer Science",
            "About_Course":"Computer science is...",
            "Admission_Requirement":"https://admissions.rpi.edu/undergraduate/apply"
        },
        ...
    ]
}
```

### GetChanceReq
```
{
    "user_id": 2
}
```

### GetChanceResp
```
{
    "chance":0.4368208066245136
}
```