console.log('Server is live 🔥')

// Task 01:
// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
const arr = [1, 2, 3, 4, 5]
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    // Wait for 1 second before logging the value
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(value)
  }
}
// Call the iterateWithAsyncAwait
// iterateWithAsyncAwait(arr)

// Task 02:
// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
const awaitCall = async () => {
  const data = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=3c8eb52')
  const resp = await data.json()
  console.log(resp.Title, resp.Country)
}
// Call the awaitCall
// awaitCall()

// Task 03:
// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
const awaitCall2 = async () => {
  try {
    const data = await fetch(
      'http://www.omdbapi.com/?i=tt3896198&apikey=3c8eb52'
    )
    const resp = await data.json()
    console.log(resp.Title, resp.Country)
  } catch (err) {
    console.log(err.message + ' Error fetching data 🛑')
  }
}
// Call the awaitCall2
// awaitCall2()

// Task 04:
// Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

// Define the first async function
async function firstFunction() {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve('First function executed after 1 second'), 1000)
  ) // Delay of 1 second
  console.log(await result)
}

// Define the second async function
async function secondFunction() {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve('Second function executed after 1 second'), 1000)
  ) // Delay of 1 second
  console.log(result)
}

// Define the third async function
async function thirdFunction() {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve('Third function executed after 1 second'), 1000)
  ) // Delay of 1 second
  console.log(result)
}

// Define the chainedAsyncFunctions function
async function chainedAsyncFunctions() {
  await firstFunction() // Wait for the first function to complete
  await secondFunction() // Wait for the second function to complete
  await thirdFunction() // Wait for the third function to complete
}

// Call the chainedAsyncFunctions
// chainedAsyncFunctions()

// Task 05:
// Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved
async function concurrentRequests() {
  try {
    // Make two API requests concurrently using Promise.all()
    const [response1, response2] = await Promise.all([
      fetch('http://www.omdbapi.com/?i=tt3895198&apikey=3c8eb52'), // Replace with your API URL
      fetch('http://www.omdbapi.com/?i=tt3898198&apikey=3c8eb52'), // Replace with your API URL
    ])

    // Parse the JSON responses
    const data1 = await response1.json()
    const data2 = await response2.json()

    const first = `Title: ${data1.Title}, Year: ${data1.Year}, Release Date: ${data1.Released}, RunTime: ${data1.Runtime}`
    const second = `Title: ${data2.Title}, Year: ${data2.Year}, Release Date: ${data2.Released}, RunTime: ${data2.Runtime}`

    // Combine and log the results
    console.log('Combined Results:', {
      first,
      second,
    })
  } catch (error) {
    console.error('Error with API requests:', error)
  }
}

// Call the function concurrentRequests
// concurrentRequests()

// Task 06:
// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete

async function parallelCalls(urls) {
  try {
    // Create an array of promises that fetch data from each URL
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    )

    // Use Promise.all to wait for all the promises to resolve
    const responses = await Promise.all(fetchPromises)

    // Log the responses once all requests are complete

    console.log(responses)
  } catch (error) {
    // Handle any errors that occur during the fetch operations
    console.error('Error fetching data:', error)
  }
}

const urls = [
  'http://www.omdbapi.com/?i=tt3895198&apikey=3c8eb52',
  'http://www.omdbapi.com/?i=tt3898198&apikey=3c8eb52',
  'http://www.omdbapi.com/?i=tt3891298&apikey=3c8eb52',
]

// Call the function parallelCalls
parallelCalls(urls)
