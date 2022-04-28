import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  // 相当于data中的属性
  private title?: string = 'title';

  // 相当于computed中的函数
  get titleComputed() {
    return 'computed: ' + this.title;
  }

  created() {
    console.log('默认声明周期')
  }
  handleClick(arg: string): void {
    this.title = arg;
  }

  render(): JSX.Element {
    return (
      <div class="index-page">Index.tsx

        <h2>{this.title}</h2>
        <p>{this.titleComputed}</p>

        <input v-model={this.title} />
      </div>
    )
  }
}