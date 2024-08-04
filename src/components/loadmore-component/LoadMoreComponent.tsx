import { CSSProperties, ReactNode, useState } from "react";

interface LoadMorePropsInterface {
    limit: number;
    incrementBy: number;
    loadMoreText: string;
    showLessText: string;
    buttonStyling: CSSProperties;
    loadMoreButtonBackgroundColour: string;
    showLessButtonBackgroundColour: string;
    loadMoreButtonTextColour: string;
    showLessButtonTextColour: string;
    children: Array<ReactNode>;
    itemWrapperStyling: CSSProperties;
    unableToLoadText: string;
}

const LoadMoreComponent = (props:LoadMorePropsInterface) => {

    if(props.children === undefined || props.children === null) {
        return (
            <div className="empty-list">
                <span> {props.unableToLoadText || "Unable to Load.." } </span>
            </div>
        );
    }

    const [getLimit, setLimit] = useState(props.limit);

    const componentList = props.children.map((component:any) => component);

    const limitedList = componentList.slice(0, getLimit);

    console.log(limitedList, 'limited list')

    const limitedSkillsList = () => {
        if (limitedList.length == props.children.length) {
            setLimit(props.limit);
        } else {
            setLimit((prevState) => {
                return prevState + props.incrementBy
            });
        }
    }

    return (
        <section className="loadmore-list-container">
            <div className="loadmore-list-wrapper" style={props.itemWrapperStyling}>
                {limitedList}
            </div>
            <div className="loadmore-list-actions">
                <button 
                    className="loadmore-button" 
                    onClick={limitedSkillsList}
                    style={
                        (limitedList.length == props.children.length) ?
                        {...props.buttonStyling, backgroundColor: props.showLessButtonBackgroundColour, color: props.showLessButtonTextColour} :
                        {...props.buttonStyling, backgroundColor: props.loadMoreButtonBackgroundColour, color: props.loadMoreButtonTextColour}
                    }
                >
                    {(limitedList.length == props.children.length) ? props.showLessText : props.loadMoreText}
                </button>
            </div>
        </section>
    );
}

export default LoadMoreComponent;