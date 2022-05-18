## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
HOME:
      Styled List [to display inspiration]
      Login btn [to authenticate users]
      Create btn [permit authenticated users to create a post]
AUTH:
      Sign in form (email, pw, button)[to grab user input]
      Sign up form (email, pw, button)[to grab user input]
      
CREATE:
      logOut btn [revoke access token]
      Home btn [See all posts with access token]
      form (title, wisdom, source, button) [for user to submit wisdom]

    
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
submit clicks (3 event listeners?)
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
user sees all posts
clicks to create a post
taken to auth page 
  user signs up: taken to create page (async funks here)
  user signs in: taken to create page (async funks here)
User arrives to create page (empty state)  
  user fills in form
  user clicks save [event listener]
  DOM is updated- post appears on the home page to all users (despite authentication)
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
console log the email/pw inputs
access create page while not logged in to see if auth functions are working 
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
Build html form 
link buttons/pages
build out toolbox in renderUtils 




Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todo's, etc) will you need? 
      **users, posts.**
  - What are the key/value pairs? 
      **email:input/pw:input & title/wisdom/origin:input**
  - What arrays might you need? 
      **array of posts**
  - What needs to live in a persistence layer?
- Is there some state we need to initialize? 
    **sign in, sign up, and wisdom form**
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
    **!!!need to think on this!!!**
