import { App } from "vue";

export default {
  install(app: App) {
    const modules = import.meta.glob("./*.vue", { eager: true });
    for (const path in modules) {
      // @ts-ignore
      const component = modules[path].default;
      app.component(component.name, component);
    }
  },
};
