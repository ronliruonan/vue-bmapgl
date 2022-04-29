export { default as Wrapper } from './WrapperHOC';
export { default as BMapComponent } from './BMapComponent';

export interface MapChildrenProps {
    /** *地图实例，来自父元素`<Map>`的继承，无需手动传入 */
    map: BMapGL.Map;
};