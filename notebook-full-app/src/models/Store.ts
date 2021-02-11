import { Socket, Store } from "../library";
import { action, toJS } from "mobx";

export interface AnnotationLog {
  note: string;
  isCurated: boolean;
  stale: boolean;
}

export interface StoreProps {
}

export class AppStore extends Store<StoreProps> {
  constructor(socket: Socket, defaultProps: StoreProps) {
    super(socket, defaultProps, undefined, AppStore.deserialize);
  }

  // deserialize the data from the server
  public static deserialize(socket: Socket, prop: string, data: any) {
    return data;
  }
}