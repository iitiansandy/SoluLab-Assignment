# SoluLab-Assignment </br>

<h3>Make sure to read the whole document carefully and follow the guidelines in it.</h3> </br>
<h3>Preface:</h3> Build a <strong>RESTful API</strong> that can /create/read/update/delete Product and Category data from a
persistence database.</br>
<h3>Product Model:</h3></br>
{</br>
productId : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Product ID</br>
productName : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Product Name</br>
qtyPerUnit : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Quantity of the Product</br>
unitPrice : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Unit Price of the Product</br>
unitInStock : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Unit in Stock</br>
discontinued : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Boolean (yes/no)</br>
categoryId : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Category ID</br>
}
<h3>Category Model:</h3></br>
{</br>
categoryId : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Category ID</br>
categoryName : xxx, &nbsp;&nbsp;&nbsp;&nbsp; // Category Name</br>
}
<h3>Functionality:</h3></br>
● The API should follow typical <strong>RESTful API</strong> design patterns.</br>
● The data should be saved in the DB.</br>
● Category ID in product table should be referenced in the category table.</br>
● Provide proper unit tests.</br>
● Provide proper API documents.</br>
● /create should create the product and category.</br>
● /read should read particular record from the product table (if product has any category then
category should be fetched in the response)</br>
● /readAll should read all the records from the product table (if product has any category then
category should be fetched in the response)</br>
● /update should update one particular record of the product</br>
● /delete should delete one particular record of the product.</br>
<h3>Requirements:</h3></br>
● Write clear documentation on how it's designed and how to run the code.</br>
● Write good in-code comments.</br>
● Write good commit messages.</br>
● An online demo is always welcome.</br>
● Provide proper readme which includes steps to setup the code in any system, API documentation
(Postman documentation link is preferred).</br>
● Candidate needs to provide the github link and the candidate has to make his repository private.
<h3>Tech stack:</h3></br>
● Use <strong>Node.js</strong> and any framework.</br>
● Use any DB. <strong>NoSQL DB</strong> is preferred.</br>
<h3>Bonus Points:</h3></br>
● If you are familiar with <strong>ES6</strong> standards then it will be a bonus point for you.</br>
● If you can use <strong>aggregation</strong> for /read query for fetching the data from multiple tables then it would
be considered as a bonus point.</br>
● If you follow the good practices of the Node js for coding standard/folder structure then it would
be considered as a bonus point.</br>
<h3>What We Care About</h3></br>
Feel free to use any open-source library as you see fit, but remember that we are evaluating your coding
skills and problem solving skills.</br>
<h3>Here's what you should aim for:</h3></br>
● Good use of current Node.js & API design best practices.</br>
● Good testing approach.</br>
● Extensible code.</br>
<h3>NOTE: Candidate should not be able for further rounds if we found plagiarism.</h3></br>

## Available Scripts

In the project directory, you can run:</br>

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your <strong>browser</strong> or in any API Testing Tool like <strong>Postman</strong>.

The page will reload when you make changes.\
You may also see any lint errors in the console.
