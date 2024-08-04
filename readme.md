# React Loadmore Wapper Component

Simple React load more wrapper component - Wrap around any list of elements.

## How to use

### Install

Installation: `npm install react-loadmore`

### Usage

Import the package into your app:

`import { LoadMoreComponent } from "react-loadmore";`

#### Component options:
```
    <LoadMoreComponent 
        limit={4} 
        incrementBy={4}
        loadMoreText={'Load More'}
        showLessText={"Show Less"} 
        buttonStyling={{padding: "1rem 2rem", borderRadius: "4px", border: "0"}}
        loadMoreButtonBackgroundColour={"blue"}
        showLessButtonBackgroundColour={"red"}
        loadMoreButtonTextColour={"white"}
        showLessButtonTextColour={"white"}
        itemWrapperStyling={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", gap: "12px", padding: "1rem"}}
        unableToLoadText="Unable to Load"
    >
        <div className="item"><span>item</span></div>
        <div className="item"><span>item</span></div>
        <div className="item"><span>item</span></div>
        <div className="item"><span>item</span></div>
        <div className="item"><span>item</span></div>
        <div className="item"><span>item</span></div>
        <div className="item"><span>item</span></div>
        <div className="item"><span>item</span></div>
    </LoadMoreComponent>

    The <LoadMoreComponent> can accept any element between the opening and closing tag. 

    -  limit={4}
        The inital limit.

    -  incrementBy={4}
        Number you wish to increment by when clicking loadmore.

    -  loadMoreText={'Load More'}
        Text for load more button.

    -  showLessText={"Show Less"}
        Text for Show less button.

    -  buttonStyling={{padding: "1rem 2rem", borderRadius: "4px", border: "0"}}
        Takes an object of styles following standard react inline styling.

    - loadMoreButtonBackgroundColour={"blue"}
        Load more button background colour.

    - showLessButtonBackgroundColour={"red"}
        Show less button background colour.

    - loadMoreButtonTextColour={"white"}
        Load more button text colour.

    - showLessButtonTextColour={"white"}
        Show less button text colour.

    - itemWrapperStyling={{display: 'flex', flexDirection: 'row', flexWrap: "wrap", gap: "12px", padding: "1rem"}}
        Takes an object of styles following standard react inline styling.
       
    - unableToLoadText="Unable to Load"
        Text for if wrapper is empty.
    
```
 ## Example

### Load more

![Load more example](https://raw.githubusercontent.com/RickyGoacher/react-loadmore/main/assets/images/loadmore-component-example.png)

### Show less

![Mobile device emulation example](https://raw.githubusercontent.com/RickyGoacher/react-loadmore/main/assets/images/loadmore-component-show-less-example.png)