import { Vue, Component } from 'vue-property-decorator'
// 以模块的形式引入当前的央视文件
import style from './App.module.scss';

@Component
export default class App extends Vue {
  render(): JSX.Element {
    return (
      // 将app.mdole.scss 中的.app 注入到标签中
      <div class={style.app}>
        <h1>Im App.tsx</h1>
        <router-view></router-view>
      </div>
    )
  }
}