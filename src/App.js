import React, { Component } from "react";
import { DragSource, DropTarget, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const cardSource = {
  beginDrag(props, monitor, component) {
    console.log("beginDrag");
    return { id: props.id };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    console.log(item, dropResult);
  }
};

@DragSource("Knight", cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
class Knight extends Component {
  render() {
    const { id, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{ width: "100px", height: "100px", background: "skyblue" }}>
        ♘
      </div>
    );
  }
}

const chessSquareTarget = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    const item = monitor.getItem();
    return true;
    // return canMakeChessMove(item.fromPosition, props.position);
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }
    return { moved: true };
  }
};

@DropTarget("Knight", chessSquareTarget, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
}))
class Contaier extends Component {
  render() {
    // Your component receives its own props as usual
    const { position } = this.props;

    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isOver, canDrop, connectDropTarget } = this.props;

    console.log(isOver, canDrop);
    return connectDropTarget(
      <div className="Cell">
        {isOver &&
          canDrop && (
            <div
              style={{ width: "300px", height: "300px", background: "green" }}
            />
          )}
        {!isOver &&
          canDrop && (
            <div
              style={{ width: "300px", height: "300px", background: "yellow" }}
            />
          )}
        {isOver &&
          !canDrop && (
            <div
              style={{ width: "300px", height: "300px", background: "red" }}
            />
          )}
        <div style={{ width: "300px", height: "300px", background: "#ccc" }} />
      </div>
    );
  }
}

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Knight id="test" />
        <Contaier />
      </div>
    );
  }
}

export default App;
