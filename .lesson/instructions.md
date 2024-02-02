# At Home Tasks
Congratulations on completing the second week of the Code Academy! In these tasks you should be able to apply what you have learned in the office this week, as well as exploring some new ideas. You can take on these tasks in any order you like. If you need some pointers, don't forget to make use of Slack 🙂. Let's get started...

## 1. Product Detail Page
In the office, we introduced the concept of an API route. <br><br>
If you have completed the **API Routes** lesson you should have one API Route - `/api/products` which returns a whole list of products. This works nicely, but what if we wanted to retrieve just a single product? Let's try and create a route that does this...

Using the docs (https://nextjs.org/docs/api-routes/introduction) for API routes to guide you:<br>

Create a new API route at `api/products/[id]`

* By passing the id in the route, we can use it to filter our product selection.
* How can we find only the product we need from our array of 100 products? (Hint: JavaScript has a whole host of array functions!)
* What should happen if we try to access a product that doesn't exist?

Now you can use this new API route to fetch data in your `[id].tsx` page ('Product Detail').
* Use what we learned about `useState` and `useEffect` to fetch data from the new route.
* Can you display the data in a different way?

## 2. More Style!
We have only scratched the surface of what we can achieve with CSS and Tailwind. Add some more style 🖌️ to your app and make them really stand out!<br><br>
You might want to take inspiration from your favourites sites, or explore the Tailwind documentation to see what's possible: https://tailwindcss.com/<br><br>
Try changing colours, fonts, etc., - can you add a gradient? Transition? Hover effects?

## 3. Product Filtering

On your main products page, we can see a whole load of products (100, in fact). In reality, a site may only display a small number of results at a time.

In this task, think about what needs to be done to show only 10 products on each 'page' of the products list.

Here's some hints to get you started:<br>
* To fetch the correct data, our API route will need to know which page we're on.
  * We might accomplish this using a query parameter (https://en.wikipedia.org/wiki/Query_string)
* Our API needs to know how many results to show per page
  * Start with a hard-coded value, and as a bonus later on, try and allow this to be changed in the front
* We'll only need a _slice_ of our products array!

## 4. Sidebar

Some sites may display a sidebar, for a whole range of reasons! We might need additional navigation, filtering options, even ads (😅).

Try creating a sidebar on your main products page! Don't worry too much about the content at this stage. Think more about how you might build it:
* Should the sidebar be its own component?
* How can we create the layout to be flexible?
* A user might want to collapse the sidebar - how could we accomplish this?

  