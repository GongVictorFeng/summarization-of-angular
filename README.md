# Summarization of Angular

- The main feature of Angular core is the ability of defining our own custom HTML elements:
  ![alt text](Angular-core/public/assets/defining-custom-template.png)
  this effictively allows us to extend the browser funtionality with our own functionality

- The second key property of Angular core is the ability that it gives us to build our program in a way where our data available at the level of the component and our view which is defined by the HTML templates are completely separate. We can bind two things together using interpolation syntax
  ![alt text](Angular-core/public/assets/data-in-component.png)
  ![alt text](Angular-core/public/assets/data-in-view.png)

- Pass data to the template: property binding
  ![alt text](Angular-core/public/assets/property-binding.png)

- Handle browser native events: event binding:
  ![alt text](Angular-core/public/assets/event-binding.png)

- Template reference is simply pointing to the native Dom element that corresponds here to the input:
  ![alt text](Angular-core/public/assets/template-reference.png)

  - one of the core feature of Angular - automatically reflexting in the view any modification that we do to the data
  - this synchronization is done in a secure way: html, javascript escaping
    ![alt text](Angular-core/public/assets/escaping.png)

- Create a custom HTML element: https://github.com/GongVictorFeng/summarization-of-angular/commit/b20c37559d6f2b202bfaed92c3dafe14fac501c3

- Add configurable property for the custome HTML element:

  - created a custom javascript object type for type safety: https://github.com/GongVictorFeng/summarization-of-angular/commit/23ac69d0900e7dfeadc9f909ece3813c214a84cc
  - made course a configuration property and use it in the template: https://github.com/GongVictorFeng/summarization-of-angular/commit/9cd55eb7b8a341320f3239d3df2e05f26411a5d7
  - injected the data to the course card element: https://github.com/GongVictorFeng/summarization-of-angular/commit/51329dae67e318c6a222f90e6a787c24dd707bec

- emit custom events:

  - Add a standard browser event - will bubble up: https://github.com/GongVictorFeng/summarization-of-angular/commit/6c875fd83c3a5357e79c315c0304f004d32a0c2a
    ![alt text](Angular-core/public/assets/emit-standard-browser-event.png)
  - Add a custom event - will not bubble up: https://github.com/GongVictorFeng/summarization-of-angular/commit/0e555864190f1c44ece88a67e381076882f4f772
    ![alt text](Angular-core/public/assets/emit-custom-event.png)

- Control Flow Syntax and core directives

  - @for - loop through an array and avoid doing duplicate code: https://github.com/GongVictorFeng/summarization-of-angular/commit/2d4a11d5c232988253c55c317a4dba017adfd46f
    ![alt text](Angular-core/public/assets/@for-syntax.png)

    - $index - variable contains the index of element being currently iterated
    - $count - contains the number of elements in the iterable
    - $first - identifies the first element
    - $last - identifies the last element
    - $even - identifies the index assigned is even number
    - $odd - identifies the index assigned is odd number
    - tracking function - helps uniquely identify each element. it helps Angular, especially the @for syntax to optimize the way in which the Dom gets rendered. Angular will differentiate new version of the list with the old version, only render the updated part. For instance, if you add a new element to the list, Angular can only render the new one rather than rendering the whole list again with the help of unique identifier.
      - Angular allow to write custom tracking function: https://github.com/GongVictorFeng/summarization-of-angular/commit/326504fc66b1d482d59c8d204da15db7026422ad
    - @empty allow you to display something in place of the list looping through in case the list is empty
      ![alt text](Angular-core/public/assets/@empty.png)

  - @if - conditional rendering: https://github.com/GongVictorFeng/summarization-of-angular/commit/1cfb1d93b65d696dfb0ff543f0878499f2f49e19#diff-88dcff618eb27f9c6b7323b3cd09d8e379407e852324e690fb22ce266680afd4
    ![alt text](Angular-core/public/assets/@if-syntax.png)

  - ngClass - conditional styles that are added or remove classes to sections of the page depending on the state

    - we can pass an array, a string and a configuration object
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/7642daba0490c113474a9ad07363c4ec0ce72a7a
      ![alt text](Angular-core/public/assets/ngclass.png)

  - ngstyle - apply a style directly to a component

    - pass configuration object for multiple styles
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/713d9aa56d7bb46cb56224a08b248bd91ba2511c
    - ![alt text](Angular-core/public/assets/ngstyle.png)

  - styling components

    - style with plain CSS classes - most common
    - ngclass for adding and removing classes depending on the state - only for CSS state classes
    - ngstyle for CSS properties that we want to populate depending on the data - background image

  - @switch - conditional rendering: https://github.com/GongVictorFeng/summarization-of-angular/commit/8074d41ed6b0fa5ec818a4e1330ee9147242d449
  - ngContainer - component does not have a top level element. No need to create extra wrapper elements just to apply a structure directive, we can instead use the NG container directive
    - wrapping container element, we can apply a strucutre directive
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/12c80f9d892a877541a168a36211272f7645e312
  - Angular pipe - a template mechanism that we can use to transform data and display it in another form to the user
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/2f38c6e7092d310062d3032a0dceeb86e83c1931
      ![alt text](Angular-core/public/assets/pipe.png)
    - Besides pipes for formatting strings or numeric amount, there are built-in pipes for handling collections of data like `slice`
    - Json pipe and keyvalue pipe are quite useful for debugging
      ![alt text](Angular-core/public/assets/json-pipe.png)
      ![alt text](Angular-core/public/assets/keyvalue-pipe.png)

- Local Template Querying

  - interaction between components or different elements of the template by simply using template references and accessing the element directly in the template
  - adding template references with logics in the level of template is not sufficient
  - component needs reference to some of the element in the template
  - template query for obtaining a reference to an element in the template and access it at the level of component class
  - @ViewChild:
    https://github.com/GongVictorFeng/summarization-of-angular/commit/0e2ecb4270e465b3bd3fcbc69466438b30bd7c31
    ![alt text](Angular-core/public/assets/template-querying.png)
    - if the query has multiple matching elements, the first matching element will be gotten
      ![alt text](Angular-core/public/assets/multiple-match.png)
    - query based on the name of the reference
      ![alt text](Angular-core/public/assets/query-base-on-reference-name.png)
    - query plain HTML element
      ![alt text](Angular-core/public/assets/query-plain-html.png)
    - query plain HTML element instead of component instance - passing an option object
      ![alt text](Angular-core/public/assets/query-html-element-from-component.png)
  - AfterViewInit lifecycle Hook
    - @ViewChild variable are not defined in constrution
      ![alt text](Angular-core/public/assets/view-child-variable-during-construstion.png)
    - ngAfterViewInit funtion is the earliest possible moment that all references populated by @ViewChild are available
    - the Angular framework will call this function after the references are filled in
      ![alt text](Angular-core/public/assets/references-after-view-init.png)
    - note: never modify data while using lifecycle hook
    - can not query deeper into the component hierarchy - the scope of the view child decorator query are restricted to the template of the component itself
      ![alt text](Angular-core/public/assets/view-child-scope.png)
  - @ViewChildren - get a reference to the complete collection
    https://github.com/GongVictorFeng/summarization-of-angular/commit/1a6070e92818201ee33f517acd3e8a4188f9f170
    ![alt text](Angular-core/public/assets/view-children.png)

- Content Projection

  - content projection is all about making configurable components
  - ng-content to project the content we passed
    https://github.com/GongVictorFeng/summarization-of-angular/commit/5062d30d99258e2d021421ed47aa883df2e99464
    ![alt text](Angular-core/public/assets/content-projection.png)
  - any content between the opening and the closing tag is projected in the template using ng-content
  - partial projection - using select to choose what to project
    - ![alt text](Angular-core/public/assets/project-only-img.png) - element selector
    - ![alt text](Angular-core/public/assets/class-selector.png)
  - multi-slot projection
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/8303969b6cbf40d1ddfbfae1a870fe26d5be7865
    - ![alt text](Angular-core/public/assets/multi-slot-projection.png)
    - remainding parts can be project by simply using ng-content without selector
  - get references to the projected content
    - ViewChild decorator can only query elements that are visible inside the template, it cannot query theprojected content
    - Use @ContentChild or @ContentChildren to query projected content
      - https://github.com/GongVictorFeng/summarization-of-angular/commit/46d5549290977c7414048aec3f553a5250209d2b
      - ![alt text](Angular-core/public/assets/projected-content-reference.png)
    - The scope of the content child query is restricted inside the ng-content - it is restricted to the contentpart of the component
      - ![alt text](Angular-core/public/assets/scope-of-content-child.png)
      - the earliest possible momnent for contend child is the AfterContentInit lifecycle hook

- NG Template

  - referencing a block of a template using a template reference - any HTML and CSS that is going to be filled in inside the NG template is going to be part of this template segment
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/5bd370c040c1924a74916b5df9740576282d6703
    - ![alt text](Angular-core/public/assets/ng-template.png)
    - the template is not existing in the page, only if we explicitly use it somewhere
    - the data that is visible from the parents is also visible in the ng template
  - ng template variable context and ng template outlet
    - provide the template with its own private variable context that is only visible inside the template
    - pass the tempate as an input parameter
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/3f81c1738dc2fcc7e44f5e9a0df2dcc5beb9ffcb
    - ![alt text](Angular-core/public/assets/template-as-input.png)
    - ![alt text](Angular-core/public/assets/template-as-input-part.png)

- Directives

  - Directives are classes that add additional behavior to elements
    - Structural Directives - change the DOM layout by adding, removing, or manipulating elements
    - Attribute Directives - change the appearance or behavior of an element, component, or another directive without affecting the DOM structure
    - Attribute directive interacts with the host element they applied
      - Modifying property or attributes: https://github.com/GongVictorFeng/summarization-of-angular/commit/a23a884481d0367989464f4b8b1cb4eb94638481
        ![alt text](Angular-core/public/assets/added-css-by-host-binding.png)
        ![alt text](Angular-core/public/assets/host-binding-to-set-dom-attributes.png)
      - Via events: https://github.com/GongVictorFeng/summarization-of-angular/commit/5e2924064dca43f6dced7b289f998c41c1d5b1c4
        ![alt text](Angular-core/public/assets/interact-with-host-via-dom-event.png)
      - Use directive to emit custom event: https://github.com/GongVictorFeng/summarization-of-angular/commit/d01022dd2c1d0639b7781c45c06816c3e8f1b312
        ![alt text](Angular-core/public/assets/use-directive-to-emit-custom-event.png)
    - Access directive directly either on the template or the application component where the directive is applied
      - directive `exportAs` functionality - making directive available on template or component: https://github.com/GongVictorFeng/summarization-of-angular/commit/071a23732d36a5af889877a07ae324984793afd7
        ![alt text](Angular-core/public/assets/get-reference-of-directive.png)
    - structural directive has the ability to instantiate a template
      - ngIf is the shorthand for `<ng-template [ngIf]=""></ng-template>`: https://github.com/GongVictorFeng/summarization-of-angular/commit/327904af32893baa68809d6f9516640cd78f9cdf
      - create custom structural directive: https://github.com/GongVictorFeng/summarization-of-angular/commit/a81da0d986f897054d3ddf9fca4e91f14170ac06

- View Encapsulation
  - The styles are being encapsulated and are only visible inside the particular component view
  - Angular takes every component and create a unique attribute for it like `_ngcontent-ng-c123`, then whenever Angular instantiates the template, it takes all the HTML elements of the template and stamp them with this special unique component attribute.
  - The presence of this attribute in the component elments that allows Angular to take the component stylesheet and modify the styles to make them specific to the elements of the component only
  - all elements inside the course-card are stamped with unique identifier:
    ![alt text](Angular-core/public/assets/specific-identifier-for-view-encap.png)
  - style the host HTML element of the component by `:host`
    - a special selector that is part of the angular view encapsulation mechanism, it allows us to target the host element of the component itself within component style sheet
    - the host styles are applied using `_nghost-ng-c123` to uniquely identifies the component host element
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/8e7c04bd72ee3372a8390648cd4cbd6d14171a0c
      ![alt text](Angular-core/public/assets/nghost.png)
  - style the elements that are provided by content projection
    - bypass the view encapsulation by `::ng-deep`
    - style is associated to the particular component
      ![alt text](Angular-core/public/assets/ng-deep-before.png)
    - style is not associated to the particular component
      ![alt text](Angular-core/public/assets/ng-deep-after.png)
  - style component depending on the presence of CSS styles outside the component itself by `:host-context`
    - the part inside the parentheses of the host context modifier is made generic to the whole page
    - the reminder part of the css selector after host-context is still specific to the component
    - https://github.com/GongVictorFeng/summarization-of-angular/commit/6a7a3f56e36c17cf0c0f6358b42246719b027d4d
      ![alt text](Angular-core/public/assets/host-context.png)
