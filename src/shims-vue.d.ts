declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 解决scss文件报错问题
declare module '*.scss' {
  // eslint-disable-next-line
  const sass: any
  export default sass
}