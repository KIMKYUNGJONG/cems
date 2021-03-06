import React from 'react';
import resizeEvent from 'element-resize-event';

export default class HtView extends React.Component {
  constructor(props) {
    super(props);
    this.type = undefined;
    this.dataModel = undefined;
    this.graphView = undefined;
    this.scene = undefined;
    this.htView = React.createRef();
  }
  state = {
    data: this.props.dataSet,
  };

  componentDidMount() {
    this.init();
  }
  getDataModel() {
    return this.dataModel;
  }
  getGraphView() {
    return this.graphView;
  }
  setScene(scene) {
    this.scene = scene;
  }
  getScene(scene) {
    return this.scene;
  }
  clearDM() {
    this.dataModel.clear();
  }
  updateDM(list) {
    list.forEach((item) => {
      const found = this.dataModel.getDataByTag(item.tag);
      if (found) {
        found.a('data', item.data);
        this.graphView.invalidateShape3dCachedImage(found);
      }
    });
  }
  init = () => {
    ht.Default.convertURL = (url) => {
      return './ht-static/' + url;
    };
    const type = this.props['type'] || '2d';
    this.type = type;
    const autoInvalidate = this.props.autoInvalidate;
    /* global ht */
    this.dataModel = new ht.DataModel();
    if (type === '2d') {
      this.graphView = new ht.graph.GraphView(this.dataModel);
    } else {
      this.graphView = new ht.graph3d.Graph3dView(this.dataModel);
    }
    // this.dataModel.enableAnimation();
    // this.graphView.enableDashFlow();
    const view = this.graphView.getView();
    view.style.width = '100%';
    view.style.height = '100%';
    this.htView.current.appendChild(view);
    resizeEvent(this.htView.current, () => {
      autoInvalidate && this.graphView.invalidate();
    });
  };

  render() {
    return (
      <div
        ref={this.htView}
        style={{ textAlign: 'left', ...this.props.style }}
      />
    );
  }
}
