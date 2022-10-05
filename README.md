# Application to get the list of images for a given url

It contains two project API & Next.js

To run API project:

-   Navigate to \frontend project
    -   Run `npm install`
    -   Run `npm run dev`

It contains one endpoint: `/parse`
This is a post request
Body should be sent as:

```json
{
	"url": "https://unsplash.com/s/photos/no-splash"
}
```

Response:

```json
{
  "url": "https://unsplash.com/s/photos/no-splash",
   "images": [
        "https://sb.scorecardresearch.com/p?c1=2&amp;c2=32343279&amp;cv=2.0&amp;cj=1",
        "https://plus.unsplash.com/premium_photo-1661949215325-94686db1b2b4?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm8lMjBzcGxhc2h8ZW58MHx8MHx8&amp;w=1000&amp;q=80",
        ...
   ],
    "wordsCount": 12433,
    "words": [
        [
            "window",
            10
        ],
        [
            "kitchen",
            9
        ],
        ...
    ]
}
```

To run client side:

-   Navigate to \frontend project
    -   Run `npm install`
    -   Run `npm run dev`

Application should be available by navigating to `http://localhost:3005`
