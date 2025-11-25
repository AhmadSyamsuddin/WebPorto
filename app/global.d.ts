/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  import { BufferGeometry, Material, Vector3 } from "three";
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: Vector3[]): void;
  }
  export class MeshLineMaterial extends Material {
    constructor(parameters?: Record<string, any>);
    color: string | number;
    opacity: number;
    resolution: [number, number];
    lineWidth: number;
    map: any;
    useMap: boolean;
    repeat: [number, number];
    depthTest: boolean;
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
