<div align="center">
<strong>
<samp>

[English](README.md) · [简体中文](README.zh-Hans.md)

</samp>
</strong>
</div>

## 一组函数式风格的工具函数

### 专注于简单易用, 只需要你了解以下概念:

1. 一元函数: (input) => output
2. 高阶函数: (a) => (b) => c

### 使用场景

```typescript
//before
const handleSumbit = async formValues => {
  const values = await validate(formValues)
  const actualValues = await transform(values)
  const result = await post(acutalValues)
  return result
}

//after
const handleSumbitFp = asyncFlow(validate, transform, post)
```

### 组合函数

1.  `flow` 参数都是函数, 返回一个函数
    > 使用场景:\
    > 当下一个函数只需上一个函数的返回值时

```typescript
const getLength = (x: string) => x.length
const increase = (x: number) => x + 1
const workFlow = flow(getLength, increase)
const result = workFlow('FP') // result = 3
```

2.  `pipe` 第一个参数是值, 后面的参数都是函数
    > 使用场景:\
    > 分发依赖

```typescript
const getLength = (x: string) => x.length
const increase = (x: number) => x + 1
const result = (input: string, step: number) =>
  pipe('FP', getLength, increaseWith(step)) // result = 3
```

3. `asyncFlow` 所有参数都是异步函数(第一个是,后面不是也行), 执行后返回一个异步函数

```typescript
const workFlow = asyncFlow(fetch, r => r.json(), console.log)
workFlow('http://xx.json')
```

4. `asyncPipe` 第一个参数是一个`Promise`值, 后面的参数都是函数

```typescript
const result = await asyncPipe(fetch('http://xx.json'), r => r.json())
```

## 下面是跟组合函数一起使用的小函数

### 案列

```typescript
const datas = [
  { kind: 'frontend', lib: 'React' },
  { kind: 'backend', lib: 'Express' },
]
const result = pipe(
  datas,
  groupBy(v => v.kind),
  g => g.values(),
  toList,
  flat,
  map(v => v.lib)
)
```

1. 处理数组 (常用的)
   `map` | `filter` | `flat` | `concat`
   | `unique` | `last` | `first`

2. 处理对象
   `pick` | `omit`

3. 条件判断
   `maybe` | `fallback` | `notNull` | `isEmpty` | `isZero`

4. 其他
   `peek`|`invoke`

### 有些函数只是内建函数的别名

`waitAll` = Promise.all()\
`toList` = Array.from()\
`unique` = new Set()

### 普通函数

`pickFn` | `omitFn` | `groupByFn` | `separeByFn`

## 陷阱

```ts
const validate = () => {
  throw new Error('invalidate')
}

const post = async data => axios.post('/api', data)

const submit = flow(validate, post)

submit({}).catch(e => {
  //捕捉不到错误, 因为 `validate` 不是异步函数
})
```
