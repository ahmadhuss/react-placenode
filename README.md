# react-placenode
🤖 A placeholder component for heavy load resources like images, cards, list and so on. This package consists of 2 main components.

 - **Placenode component** 
 It can be useful in a situation where a user has to wait for the content to load e.g. when fetching data from APIs or databases.
 #### **Demo:**
 ![Example of the Placenode component](https://raw.githubusercontent.com/ahmadHuss/react-placenode/master/docs/000.gif)
  
  - **PlacenodeImage component** 
 It reserve space for the image and helps the user to know the image is loading. You have to manually render your image with your component state logic. 
 
#### Demo:
![Example of the PlacenodeImage component](https://raw.githubusercontent.com/ahmadHuss/react-placenode/master/docs/001.gif)


## Getting Started

Install `react-placenode` from NPM. Import CSS file or you could also import the SASS file if you are using a preprocessor.

```js
// import css file
import 'react-placenode/css/placenode.css';

// optional for preprocessor like sass environment
import 'react-placenode/scss/placenode.scss';
```

Now you can import required components on your custom component files:

```js
// import only Placenode component
import { Placenode } from 'react-placenode';

// import only PlacenodeImage component
import { PlacenodeImage } from 'react-placenode';

// import both components
import { Placenode, PlacenodeImage } from 'react-placenode';

```

## Placenode props
This component contains only 5 props.
##### 1:
|Name|Type|Default|Description|
|--|--|--|--|
| `active` | Boolean  |false | show animation effect |

#### Snippet
```js
// It will set the animation effect to true
<Placenode active />
```

##### 2:
|Name|Type|Default|Description|
|--|--|--|--|
| `avatar` | Boolean / {size,shape}  |false | enable avatar placeholder |

#### Snippets:
```js
// active avatar placeholder
<Placenode avatar />

// Use avatar object properties

/**
 * size
 * Set the avatar size
 * Type - Number / 'large', 'small', 'default'
 * 
 * shape
 * Set the shape of the avatar
 * Type - 'circle', 'square'
 */
 
 // size property use cases:
 // It will set some inline styles on the avatar
 // For example: set the width, height & line-height of the 46 
 // pixels
 <Placenode avatar={ {size:46} } />
 <Placenode avatar={ {size:'large'} } />
 <Placenode avatar={ {size:'small'} } />
 
 // shape property use cases:
 <Placenode avatar={ {shape:'circle'} } />
 <Placenode avatar={ {shape:'square'} } />
 
```
##### 3:
|Name|Type|Default|Description|
|--|--|--|--|
| `loading` | Boolean | | display placenode component until loading is `true` |

 #### Snippet:
```js
//#region Global imports
import React, { useState } from "react";
import "react-placenode/scss/placenode.scss";
import { Placenode } from "react-placenode";
//#endregion Global imports

//#region Component
const App = () => {
  const [loading, setLoading] = useState(true);

  const toggle = () => {
    setLoading(prevLoading => {
      return !prevLoading;
    });
  };

  return (
    // `loading` could be state value of your local state
    <Placenode loading={loading}>
      {/* Content will display when loading value of the local state would be false.  */}
    </Placenode>
  );
};

export default App;
//#endregion component
```
##### 4:
|Name|Type|Default|Description|
|--|--|--|--|
| `paragraph` | Boolean / {rows,width}  |false | show paragraph placeholder |

#### Snippets:
```js
// active paragraph placeholder
<Placenode paragraph />

// Use paragraph object properties

/**
 * rows
 * Set the row count of paragraph
 * Type - Number
 * 
 * width
 * It will set the width of the paragraph. If width is an array
 * it will set the width of each row. Otherwise just set
 * the width of the last row
 * Type - Number / String / [Number/ String]
 * 
 */
 
 // rows property use case:
 // Make paragraph of 6 rows
 <Placenode paragraph={ {rows:6} } />
 // Make paragraph of 8 rows
 <Placenode paragraph={ {rows:8} } />
 
 // width property use cases:
 // Set the width of the paragraph of last row to 9 pixels. 
 <Placenode paragraph={ {width:9} } />
 <Placenode paragraph={ {width:'9px'} } />
 // Set the width of the paragraph of last row to 9 rem.
 <Placenode paragraph={ {width:'9rem'} } />
 // Set the width of `1st row` 2px, `2nd row` 4rem and so on.
 <Placenode paragraph={ {width:[2,'4rem',6,7]} } />

```
##### 5:
|Name|Type|Default|Description|
|--|--|--|--|
| `title` | Boolean / {width}  |false | show title placeholder |

#### Snippets:
```js
// active title placeholder
<Placenode title />

// Use title object properties

/**
 * width
 * Set the width of title
 * Type - Number / String
 */
 
 // width property use cases:
 // Set the width of the title to 9 pixels. 
 <Placenode title={ {width:9} } />
 <Placenode title={ {width:'9px'} } />

```
## Component Example

```js
//#region Global imports
import React, { useState } from "react";
import "react-placenode/scss/placenode.scss";
import { Placenode } from "react-placenode";
//#endregion Global imports

//#region Component
const App = () => {
  const [loading, setLoading] = useState(true);

  const toggle = () => {
    setLoading(prevLoading => {
      return !prevLoading;
    });
  };
  return (
    <>
      <div style={{ width: "100%", maxWidth: "760px", margin: "0 auto" }}>
        {/* Combination with avatar, title and multiple paragraphs. */}
        <Placenode
          loading={loading}
          active
          title
          avatar
          paragraph={{ rows: 4, width: ["100%", "100%", "100%", "100%"] }}>
         
          {/* Content */}
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            
            {/* Image Wrapper */}
            <div style={{ paddingRight: "16px" }}>
              <img
                style={{ display: "block" }}
                src="https://s.gravatar.com/avatar/189aabc3ffd285683ec6dc6a024b9c49?size=200&default=retro"
                alt="Avatar"/>
            </div>
            
            {/* Paragraph */}
            <div>
              <p style={{ margin: 0 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </Placenode>
      </div>
      {/* Button */}
      <button onClick={toggle}>
        {loading ? "Data is fetching..." : "Data loaded"}
      </button>
    </>
  );
};

export default App;
//#endregion component
```

## PlacenodeImage props
|Name|Type|Default|Description| 
|--|--|--|--|
| `active` | Boolean | | active animation effect
| `tag` | elementType | | an element type you want to render (string or function).
| `className` | String |  | additional classes on the container
| `fluid` | Boolean |  | make your placeholder fluid that takes up the width of its container
| `shape` | 'square' / 'rectangular'|  | `square` (1:1) or `rectangular` (4:3) will embed an aspect ratio into the image loader so that they modify size correctly with responsive styles.

#### Snippets:
```js
// active animation
<PlacenodeImage active />

// render container as `anchor` element
<PlacenodeImage tag="a" />

// explicit add width & height of the placeholder container
<PlacenodeImage style={{ height: 150, width: 150 }} />

// active animation & set `square` aspect ratio
<PlacenodeImage active shape="square" />

// active animation & set `rectangular` aspect ratio
<PlacenodeImage active shape="rectangular" />

// active animation & takes the width of its container
<PlacenodeImage active fluid />

```

## Component Example
```js
//#region Global imports
import React, { useState } from "react";
import "react-placenode/scss/placenode.scss";
import { PlacenodeImage } from "react-placenode";
//#endregion Global imports

//#region Component
const App = () => {
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(prevLoading => {
      return !prevLoading;
    });
  };

  return (
    <>
      {loading && (
        <PlacenodeImage
          active
          style={{ width: 200, height: 200 }}
          shape="square"
        />
      )}
      <img
        style={loading ? { display: "none" } : {}}
        src="https://s.gravatar.com/avatar/189aabc3ffd285683ec6dc6a024b9c49?size=200&default=retro"
        alt="Avatar"
        onLoad={load}
      />
      <h1>{loading ? "Loading..." : "Loaded"}</h1>
    </>
  );
};

export default App;
//#endregion component

```
