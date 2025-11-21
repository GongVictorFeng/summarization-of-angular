# Summarization of Angular

- The main feature of Angular core is the ability of defining our own custom HTML elements:
  ![alt text](assets/defining-custom-template.png)
  this effictively allows us to extend the browser funtionality with our own functionality

- The second key property of Angular core is the ability that it gives us to build our program in a way where our data available at the level of the component and our view which is defined by the HTML templates are completely separate. We can bind two things together using interpolation syntax
  ![alt text](assets/data-in-component.png)
  ![alt text](assets/data-in-view.png)

- Pass data to the template: property binding
  ![alt text](assets/property-binding.png)

- Handle browser native events: event binding:
  ![alt text](assets/event-binding.png)

- Template reference is simply pointing to the native Dom element that corresponds here to the input:
  ![alt text](assets/template-reference.png)

  - one of the core feature of Angular - automatically reflexting in the view any modification that we do to the data
  - this synchronization is done in a secure way: html, javascript escaping
    ![alt text](assets/escaping.png)

- Create a custom HTML element: https://github.com/GongVictorFeng/summarization-of-angular/commit/b20c37559d6f2b202bfaed92c3dafe14fac501c3
- Add configurable property for the custome HTML element:
  - created a custom javascript object type for type safety: https://github.com/GongVictorFeng/summarization-of-angular/commit/23ac69d0900e7dfeadc9f909ece3813c214a84cc
  - made course a configuration property and use it in the template: https://github.com/GongVictorFeng/summarization-of-angular/commit/9cd55eb7b8a341320f3239d3df2e05f26411a5d7
  - injected the data to the course card element: https://github.com/GongVictorFeng/summarization-of-angular/commit/51329dae67e318c6a222f90e6a787c24dd707bec
