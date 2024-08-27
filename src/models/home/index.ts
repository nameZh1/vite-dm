export interface Menu {
  pickMenu: MenuItem,
  menuList: MenuItem[],
  pickHandle(item: MenuItem): void,
  // [key: string | number | symbol]: any,
}

export interface MenuItem {
  id: number | string;
  name: string;
  path?: string;
  component: any
}