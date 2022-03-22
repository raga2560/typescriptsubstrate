curl --request POST \
  --url https://api.sendinblue.com/v3/smtp/email \
  --header 'accept: application/json' \
  --header 'api-key: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' \
  --header 'content-type: application/json' \
  --data '{  
   "sender":{  
      "name":"Sender Alex",
      "email":"condaveat@gmail.com"
   },
   "to":[  
      {  
         "email":"condaveat@gmail.com",
         "name":"John Doe"
      }
   ],
   "subject":"Hello world",
   "htmlContent":"<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Sendinblue. OTP is 1000 </p></body></html>"
}'
