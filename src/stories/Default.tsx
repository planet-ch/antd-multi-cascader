import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import MultiCascader from '../index'

storiesOf('MultiCascader', MultiCascader as any).add('Default', () => {
  const [state, setState] = useState<string[]>([])
  const [disabled] = useState<boolean>(false)
  const [options] = useState([
    {
      value: 'Node1',
      title: 'Node1',
      children: [
        {
          value: 'Node1-1',
          title: 'Node2',
          children: [
            {
              value: 'Node4',
              title: 'Node4',
            },
            {
              value: 'Node5',
              title: 'Node5',
            },
          ],
        },
        {
          value: 'Node1-2',
          title: 'Node3',
          children: [
            {
              value: 'Node8',
              title: 'Node4',
            },
            {
              value: 'Node0',
              title: 'Node5',
            },
          ],
        },
        {
          value: 'Node1-3',
          title: 'Node4',
          children: [
            {
              value: 'Node51',
              title: 'Node42',
            },
            {
              value: 'Node03',
              title: 'Node54',
            },
          ],
        },
      ],
    },
    {
      value: 'Node2',
      title: 'Node2',
    },
  ])


  const onChange = (v, v1) => {
    console.log(v, v1)
    setState(v)
  }

  return (
    <>
      <MultiCascader
        selectAll
        data={options}
        value={state}
        onChange={(v,v1) => onChange(v, v1)}
        disabled={disabled}
        placeholder="Default"
        style={{ width: '320px' }}
        showBottom={true}
        fristColumMulti={true}
        isToolTip={true}
      />
    </>
  )
})


