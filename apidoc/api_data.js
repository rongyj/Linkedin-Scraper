define({ "api": [
  {
    "type": "delete",
    "url": "api/jobs/:job_id",
    "title": "Delete specific jobs",
    "name": "DeleteJob",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>'Job Successfully Deleted!'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"message\": \"Job Successfully deleted!\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "delete",
    "url": "api/jobs",
    "title": "Delete all jobs",
    "name": "DeleteJobs",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>'All Job Successfully Deleted!'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"message\": \"All Job Successfully Deleted!\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "get",
    "url": "api/jobs/:job_id",
    "title": "Request specific job information",
    "name": "GetJob",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>All information about a job</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"job\": {\n      \"_id\": \"5752e350cf6a694c1c5cf622\",\n      \"job_id\": \"140796356\",\n      \"job_name\": \"Event Planner\",\n      \"company\": \"Yanbal International\",\n      \"logo\": \"https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAiFAAAAJDg1MWJlZWU3LTRmZTUtNDlmOS1hYzY3LTQ3NmJjZDY4MDdjZQ.png\",\n      \"location\": \"Deerfield Beach, Florida\",\n      \"description\": \"Work closely with cross-functional departments, External Vendors and leadership to define event goals, objectives and initiatives that ... \",\n      \"other_details\": {\n        \"full_description\": {\n          \"Omitted from this documentation, too long\"\n        },\n        \"industries\": [\n          \"Fine Art\"\n        ],\n        \"experience\": \"Mid-Senior level\",\n        \"functions\": [\n          \"Marketing\"\n        ],\n        \"listDate\": \"June 4, 2016\",\n        \"expireDate\": \"July 4, 2016\"\n      }\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "get",
    "url": "api/jobs",
    "title": "Request all jobs",
    "name": "GetJobs",
    "group": "Jobs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "jobs",
            "description": "<p>'All jobs information (job_id job_name company location)'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"results\":[\n      {\"_id\":\"5752e350cf6a694c1c5cf622\",\n      \"job_id\":\"140796356\",\n      \"job_name\":\"Event Planner\",\n      \"company\":\"Yanbal International\",\n      \"location\":\"Deerfield Beach, Florida\"}\n    ]}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "api/jobs",
    "title": "Create new Job",
    "name": "PostJobs",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_id",
            "description": "<p>this must be unique, scraped job would use linkedin id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_name",
            "description": "<p>Job title/name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo Image URI</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Job description</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "other_details",
            "description": "<p>Job Details, it's an object you can insert any details you need</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  job_id: \"Test100\",\n  job_name: \"Software Engineer\",\n  company: \"UrbanHire\",\n  logo: \"mylogo\",\n  location: \"Jakarta\",\n  description: \"NodeJs Engineer\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message containing &quot;Job Successfully Created!&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job Object that just created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"message\": \"Job Successfully Created!\",\n      \"job\": \n        {\n          \"__v\": 0,\n          \"job_id\": \"Test100\",\n          \"job_name\": \"Software Engineer\",\n          \"company\": \"UrbanHire\",\n          \"logo\": \"mylogo\",\n          \"location\": \"Jakarta\",\n          \"description\": \"NodeJs Engineer\",\n          \"_id\": \"575410d2c88171681f21c053\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Jobs"
  },
  {
    "type": "put",
    "url": "api/jobs/:job_id",
    "title": "Modify a job",
    "name": "PutJobs",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_id",
            "description": "<p>this must be unique, scraped job would use linkedin id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_name",
            "description": "<p>Job title/name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Logo Image URI</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Job description</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "other_details",
            "description": "<p>Job Details, it's an object you can insert any details you need</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  job_name: \"Software Engineer Test\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message containing &quot;Job Successfully Created!&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "job",
            "description": "<p>Job Object that just updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"message\": \"Job Successfully Updated!\",\n      \"job\": \n        {\n          \"__v\": 0,\n          \"job_id\": \"Test100\",\n          \"job_name\": \"Software Engineer Test\",\n          \"company\": \"UrbanHire\",\n          \"logo\": \"mylogo\",\n          \"location\": \"Jakarta\",\n          \"description\": \"NodeJs Engineer\",\n          \"_id\": \"575410d2c88171681f21c053\"\n          \"other_details\" : {}\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Jobs"
  }
] });