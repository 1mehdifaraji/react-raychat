interface UseRaychatProps {
  url: string;
  id: string;
}

type RaychatAnimations =
  | "bounce"
  | "wobble"
  | "tada"
  | "shakeX"
  | "shakeY"
  | "headShake"
  | "rubberBand"
  | "swing"
  | "jello"
  | "rotateIn"
  | "pulse"
  | "heartBeat"
  | "flip";

interface RaychatUser {
  chatCountByCov: { [key: string]: number };
  containerId: string;
  email: string;
  id: string;
  info: Array<any>;
  metadata: Object<any>;
  name: number;
  openConversation: boolean;
  visitorOf: string;
}

interface Raychat {
  toggle: () => void;
  getUser: () => RaychatUser;
  animate: (animationName: RaychatAnimations) => void;
  loadUser: (userId: string) => void;
}

interface Window {
  RAYCHAT_TOKEN: string;
  Raychat: Raychat;
}

type LocalstorageItem = string | null;
