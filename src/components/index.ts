import { App } from 'vue';

// 传入 Vue 的 app 实例和一个组件对象
export function registerGlobalComponents(app: App) {
  const components = import.meta.glob('@/components/**/*.vue', { eager: true });

  // 遍历所有组件并注册
  for (const path in components) {
    const component = components[path] as any;
    const componentName = component.default.name || getComponentName(path);
    
    app.component(componentName, component.default);
  }
}

// 通过路径获取组件名
function getComponentName(path: string) {
  return path.split('/').pop()?.replace(/\.\w+$/, '') || '';
}
