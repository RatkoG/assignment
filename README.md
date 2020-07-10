## Cookies

There are two inputs where: 
 - First input will set the name of the cookie  	
 - Second input will set the value of the cookie

3 Buttons 

 1. **Set Cookie**
	 2. Set initial name and value from the input fields
 2. **Get Cookie**
	 3. Get the last cookie
 3. **All Cookies**
	 4. Will list all the cookis that are saved

## POST
An object that will be send with POST method.
In the response back return will be chech if the response contains
 `data: { products: [{ id: 'abacab' }] },`
 If it does response will return ***succes.***
 If the respons doesn't have that ID it will return ***The ID does not match***
 If there is no data that has products it will return **That data does NOT exist here...**
