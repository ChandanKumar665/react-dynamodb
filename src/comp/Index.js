import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd'
import axios from 'axios'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      cols: []
    }
  }

  async getData () {
    const url = 'https://h2glrzzai2.execute-api.ap-south-1.amazonaws.com/dev'
    const payload = { name: 'getAll' }
    let { data } = await axios.post(url, payload)
    this.setState({ data: data.data })
  }
  async create () {
    const url = 'https://h2glrzzai2.execute-api.ap-south-1.amazonaws.com/dev'
    const payload = {
      name: 'create',
      data: { id: '10056', name: 'test', mobile: '98765678' }
    }
    let { data } = await axios.post(url, payload)
    this.setState({ data: data.data })
  }
  async update () {
    const url = 'https://h2glrzzai2.execute-api.ap-south-1.amazonaws.com/dev'
    const payload = {
      name: 'update',
      data: { id: '10056', name: 'test', mobile: '98765678' }
    }
    let { data } = await axios.post(url, payload)
    this.setState({ data: data.data })
  }
  componentDidMount () {
    this.getData()
    this.setState({ cols: this.getCols() })
  }

  getCols () {
    return [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>
      },
      {
        title: 'Mobile',
        dataIndex: 'mobile',
        key: 'mobile',
        render: text => <a>{text}</a>
      }
    ]
  }
  render () {
    const { cols, data } = this.state
    return (
      <div className='container'>
        <Table key={1} columns={cols} dataSource={data} />
      </div>
    )
  }
}

export default Index
