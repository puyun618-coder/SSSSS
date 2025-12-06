import React from 'react';

export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface DualPosition {
  treePosition: [number, number, number];
  scatterPosition: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

export interface TreeConfig {
  height: number;
  radius: number;
  particleCount: number;
  ornamentCount: number;
}

export interface HandPosition {
  x: number; // Normalized -1 to 1
  y: number; // Normalized -1 to 1
  isActive: boolean;
}

// Fix for JSX.IntrinsicElements errors where R3F types are not automatically picked up
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      points: any;
      instancedMesh: any;
      primitive: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      fog: any;
      bufferGeometry: any;
      bufferAttribute: any;
      sphereGeometry: any;
      coneGeometry: any;
      planeGeometry: any;
      shaderMaterial: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
    }
  }
}
