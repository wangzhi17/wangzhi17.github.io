import React from './react_16.4.0_dev'
import ReactDOM from './react-dom_16.4.0_dev'
import Babel from './babel_6.26.0'
export default class TableInfoComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    modeConversion = (mode) => {
        let modeTitle = '';
        switch (mode) {
            case '0':
                modeTitle = '自动模式';
                break;
            case '1':
                modeTitle = '离线模式';
                break;
            case '2':
                modeTitle = '命令模式';
                break;
        }
        return modeTitle;
    };
    render() {
        const {tableInfo} = this.props;
        return (
            <div style={styleSheet.tableInfo}>
                <text style={styleSheet.tableInfoText}>餐桌号：{tableInfo.tableName}</text>
                <text style={styleSheet.tableInfoText}>点火状态：{tableInfo.fireStatus === '0' ? '关闭' : '开启'}</text>
                <text style={styleSheet.tableInfoText}>设置角度：{tableInfo.setOpenPercent}</text>
                <text style={styleSheet.tableInfoText}>当前角度：{tableInfo.currentOpenPercent}</text>
                <text style={styleSheet.tableInfoText}>模式：{this.modeConversion(tableInfo.controllerMode)}</text>
            </div>
        )
    }

}
const styleSheet = ({
    tableInfo: {
        marginRight: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    tableInfoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    }
});