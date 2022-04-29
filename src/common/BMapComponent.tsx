import { Component, Prop, Vue } from 'vue-property-decorator';
import { MapInstance, Options } from './WrapperHOC';

interface InstanceOptions {
  [x: string]: any;
}

@Component
export default class BMapComponent extends Vue {

  @Prop() registeredEvents?: any;
  @Prop() map: BMapGL.Map;
  @Prop() instance: MapInstance;
  @Prop() options: Options = [];

  getMap() {
    return this.map;
  }

  getInstance(component: BMapComponent): MapInstance {
    return component.instance;
  }

  getOptions(props = this.$props): InstanceOptions {
    let options = {};
    this.options.forEach((key: string) => {
      if (props[key] !== undefined) {
        options[key] = props[key];
      }
    });
    return options;
  }

  //     created () {}
  //     mounted () {}
  //     updated () {}
}
