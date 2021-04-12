import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd'
import axios from 'axios'

class Index extends Component {
  constructor () {
    super()
  }

  async getData () {
    const url = 'https://h2glrzzai2.execute-api.ap-south-1.amazonaws.com/dev'
    const payload = { name: 'getAll' }
    let res = await axios.post(url, payload)
    console.log(res.data)
    return [{ id: 1111, name: 'test', mobile: 9999999 }]
  }
  async create () {
    const url = 'https://h2glrzzai2.execute-api.ap-south-1.amazonaws.com/dev'
    const payload = {
      name: 'create',
      data: { id: '10056', name: 'test', mobile: '98765678' }
    }
    let res = await axios.post(url, payload)
    console.log(res.data)
  }
  async update () {
    const url = 'https://h2glrzzai2.execute-api.ap-south-1.amazonaws.com/dev'
    const payload = {
      name: 'update',
      data: { id: '10056', name: 'test', mobile: '98765678' }
    }
    let res = await axios.post(url, payload)
    console.log(res.data)
  }
  componentDidMount () {
    this.getData()
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
    return (
      <div className='container'>
        {/* <Table columns={this.getCols()} dataSource={this.getData()} /> */}
      </div>
    )
  }
}

export default Index
