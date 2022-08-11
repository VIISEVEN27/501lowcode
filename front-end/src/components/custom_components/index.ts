export default {
  install(app) {
    const modules = import.meta.glob("./*.vue", { eager: true });
    for (const path in modules) {
      const component = modules[path].default;
      app.component(component.name, component);
    }
  },
};
