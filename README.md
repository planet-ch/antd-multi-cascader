# antd-multiple-cascader

A multiple cascader component for antd

<a href="https://codesandbox.io/s/dreamy-jennings-2y1ff?file=/src/App.tsx" target="_blank">Online Demo</a>

<div style="max-width: 420px">
  <img src="https://raw.githubusercontent.com/HelKyle/antd-multi-cascader/main/demo.png" alt="demo" />
</div>

### How to use?

```
$ npm install antd-multi-cascader or yarn add antd-multi-cascader
```

```js
const [value, setValue] = React.useState<string[]>([]);

return (
  <MultiCascader
    value={value}
    onChange={setValue}
    data={options}
    placeholder="Select Cities"
  />
)
```

### Props

| Props       | Type                | Description                                                                     |
| ----------- | ------------------- | ------------------------------------------------------------------------------- |
| value       | string[]            | Selected value                                                                  |
| data        | TreeNode[]          | Cascader options TreeNode { title: string, value: string, children?: TreeNode } |
| allowClear  | boolean             | Whether allow clear                                                             |
| placeholder | string              | The input placeholder                                                           |
| onChange    | (newVal) => void    | Callback when finishing value select                                            |
| selectAll   | boolean             | Whether allow select all                                                        |
| className   | boolean             | The additional css class                                                        |
| style       | React.CSSProperties | The additional style                                                            |
| disabled    | boolean             | Whether disabled select                                                         |