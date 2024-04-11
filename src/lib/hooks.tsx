import { useEffect, useState } from "react";

import {
  getElemById,
  getFromLocalStorage,
  raychat,
  removeElem,
  saveToLocalStorage,
} from "./helper";

export const useRaychat = ({ url, id }: UseRaychatProps) => {
  const [isEnabled] = useState(process.env.REACT_APP_RAYCHAT_TOKEN);
  const [raychatReady, setRaychatReady] = useState(false);

  const addRaychatScript = (): void => {
    if (isEnabled) {
      window.RAYCHAT_TOKEN = process.env.REACT_APP_RAYCHAT_TOKEN as string;
      const script = document.createElement("script");

      script.id = id;
      script.src = url;
      script.async = true;
      script.type = "text/javascript";

      document.head.appendChild(script);
    }
  };

  const toggleWidget = (): void => {
    if (raychatReady) raychat().toggle();
  };

  const animateRaychatWidget = (animationName: RaychatAnimations): void =>
    raychat().animate(animationName);

  const getUserPrevMessages = (userId: string): void => {
    raychat().loadUser(userId);
    restartRaychat();
  };

  const removeRaychat = (): void => {
    const raychatScript = getElemById("raychat");
    const raychatWidget = getElemById("raychat_widget");
    const raychatWidgetStyles = getElemById("raychat_frame_styles");
    if (raychatScript) removeElem(raychatScript);
    if (raychatWidget) removeElem(raychatWidget);
    if (raychatWidgetStyles) removeElem(raychatWidgetStyles);
  };

  const restartRaychat = (): void => {
    setRaychatReady(false);
    removeRaychat();
    addRaychatScript();
  };

  const saveRaychatUserId = (userId: string): void =>
    saveToLocalStorage("raychat_user_id", userId);

  const initRaychatUser = (): void => {
    const currentRaychatUser = window.Raychat.getUser();
    const savedRaychatId = getFromLocalStorage("raychat_user_id");
    if (
      currentRaychatUser &&
      savedRaychatId &&
      savedRaychatId !== currentRaychatUser.id
    )
      getUserPrevMessages(savedRaychatId);
    else {
      saveRaychatUserId(currentRaychatUser.id);
      animateRaychatWidget("tada");
      setRaychatReady(true);
    }
  };

  const addRaychatEventListener = (): void =>
    window.addEventListener("raychat_ready", initRaychatUser);

  const removeRaychatEventListener = (): void =>
    window.removeEventListener("raychat_ready", initRaychatUser);

  useEffect(() => {
    if (isEnabled) addRaychatEventListener();
    return () => {
      if (isEnabled) removeRaychatEventListener();
    };
  });

  return {
    addRaychatScript,
    toggleWidget,
    removeRaychat,
    restartRaychat,
    raychatReady,
    isEnabled,
  };
};
