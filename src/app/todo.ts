export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  parent: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
