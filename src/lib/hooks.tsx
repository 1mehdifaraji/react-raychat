import { useEffect, useState } from "react";

import {
  getElemById,
  getFromLocalStorage,
  getAllTags,
  raychat,
  removeElem,
  saveToLocalStorage,
} from "./helper";

export const useRaychat = ({ url, id }: UseRaychatProps) => {
  const [isTokenAvailable] = useState<string | undefined>(
    process.env.REACT_APP_RAYCHAT_TOKEN
  );
  const [raychatReady, setRaychatReady] = useState<boolean>(false);
  const [currentRaychatUserId, setCurrentRaychatUserId] = useState<string>("");

  const addRaychatScript = (): void => {
    if (isTokenAvailable) {
      window.RAYCHAT_TOKEN = process.env.REACT_APP_RAYCHAT_TOKEN as string;
      const script = document.createElement("script");

      script.id = id;
      script.src = url;
      script.async = true;
      script.type = "text/javascript";

      document.head.appendChild(script);
    } else {
      window.alert("توکن یافت نشد.");
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

  const removeAllRaychatScripts = ({ id }: { id: string }) => {
    if (
      id &&
      (id === "raychat" ||
        id === "raychat_widget" ||
        id === "raychat_frame_styles")
    ) {
      const raychatElement = getElemById(id);
      if (raychatElement) removeElem(raychatElement);
    }
  };

  const removeRaychatElements = (): void => {
    setRaychatReady(false);
    getAllTags("script", removeAllRaychatScripts);
    getAllTags("iframe", removeAllRaychatScripts);
    getAllTags("style", removeAllRaychatScripts);
  };

  const restartRaychat = (): void => {
    setRaychatReady(false);
    removeRaychatElements();
    addRaychatScript();
  };

  const saveRaychatUserId = (userId: string): void =>
    saveToLocalStorage("raychat_user_id", userId);

  const loadCustomUserMessages = (id: string) => {
    saveToLocalStorage("raychat_user_id", id);
    getUserPrevMessages(id);
  };

  const initRaychatUser = (): void => {
    const currentRaychatUser = raychat().getUser();
    setCurrentRaychatUserId(currentRaychatUser.id);
    const savedRaychatId = getFromLocalStorage("raychat_user_id");
    if (
      currentRaychatUser &&
      savedRaychatId &&
      savedRaychatId !== currentRaychatUser.id
    ) {
      getUserPrevMessages(savedRaychatId);
    } else {
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
    if (isTokenAvailable) addRaychatEventListener();
    return () => {
      if (isTokenAvailable) removeRaychatEventListener();
    };
  });

  return {
    addRaychatScript,
    toggleWidget,
    removeRaychatElements,
    currentRaychatUserId,
    loadCustomUserMessages,
    getUserPrevMessages,
    restartRaychat,
    raychatReady,
    isTokenAvailable,
  };
};
