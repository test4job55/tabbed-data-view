Frontend Candidate Task: Tabbed Data View in Angular (PrimeNG)

Objective
Create a small Angular app (or component) that displays data in two different formats using tabs.
Tech Requirements
Angular (v17+ recommended)
PrimeNG (any recent version)
Use of TypeScript
CSS/SCSS for styling (your call)
Simulated data source using a provided JSON
Task Details
Fetch JSON data (static file or mock API) and store it in a service or local state.
Create a tabbed interface (using PrimeNG’s p-tabView) with two tabs:
Table View Tab: Display all items from the JSON in a PrimeNG DataTable (p-table), with sortable columns .
Snippet View Tab: Show the same items in a card/list format—summarized with a title, short description, and maybe an icon.
Add simple filtering on both tabs (basic text input is fine).
Clean UI. You don’t need to focus on theme polish—just structure and readable code.
Sample Data
Use this JSON from DummyJSON (products API):
https://dummyjson.com/products
You can either:
Use it via HTTP request (GET https://dummyjson.com/products) or
Copy the JSON manually into your assets folder (assets/products.json) and load it statically (prefeared)
GIT Repo
Please create a GIT repo and send us the link so we can clone it and test.
What We’re Looking For
Code structure and cleanliness
Component-based thinking
Effective use of PrimeNG
Data handling and view separation
Optional: any animation, GraphQL mockup (not required)
