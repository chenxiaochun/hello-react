import React from 'react'
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer'
import { List as VList } from 'react-virtualized/dist/commonjs/List'
import { Select } from 'antd'

const { Option } = Select

function Student({ student, style, ...rest }) {
  return <div style={style}>{student.name}</div>
}

class StudentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  getList = () => {
    const list = []
    for (let i = 0; i < 3000; i++) {
      list.push({ name: 'fdsfdsf' })
    }
    this.setState({
      list: list,
    })
  }
  componentDidMount() {
    this.getList()
  }
  render() {
    const { list } = this.state
    const renderItem = ({ index, key, style }) => {
      return <Student key={key} student={list[index]} style={style} />
    }
    return (
      <div style={{ height: 1000 }}>
        <AutoSizer>
          {({ width, height }) => (
            <VList
              width={width}
              height={height}
              overscanRowCount={10}
              rowCount={list.length}
              rowHeight={30}
              rowRenderer={renderItem}
            />
          )}
        </AutoSizer>
      </div>
    )
  }
}

export default StudentList
