import { FC, useEffect, useState } from "react";

import { useRaychat, clearLocalstorage } from "./lib";
import {
  Card,
  Container,
  Content,
  Link,
  Title,
  Button,
  ButtonsWrapper,
  Code,
  Developer,
  Warning,
} from "./components";

const App: FC = () => {
  const [userId, setUserId] = useState<string>("");

  const {
    addRaychatScript,
    currentRaychatUserId,
    isTokenAvailable,
    loadCustomUserMessages,
    toggleWidget,
    raychatReady,
    removeRaychatElements,
    restartRaychat,
  } = useRaychat({
    id: "raychat",
    url: "https://widget-react.raychat.io/install/widget.js",
  });

  useEffect(() => addRaychatScript(), []);

  return (
    <Container>
      <Card title="Raychat + React">
        <Content>
          <Title>
            موضوع پروژه
            <Link
              url="https://github.com/1mehdifaraji/react-raychat"
              title="GitHub source"
              className="!mr-2"
            />
          </Title>
          <div className="mt-1">
            برای کار کردن رایچت با ریکت، کاستوم هوک برای عملیات کاربردی و بسیار
            مهم رایچت ایجاد کردم که براحتی بشه استفاده کرد تو هر پروژه ریکت.
            برای مثال
            <Link
              url="https://raychat.io/documentation#load_user"
              title="loadUser"
            />
            و
            <Link
              url="https://raychat.io/documentation#client_api"
              title="listener"
            />
            های رایچت که خیلی کاربردی هستن در کاستوم هوک، قرار دادم. برای
            توضیحات بیشتر خودم، میتونی به
            <Link
              url="https://raychat.io/documentation#client_api"
              title="پست لینکدین"
            />
            من سر بزنی و نظرتو بگی.
          </div>
        </Content>
        <Content>
          <Title>مستندات</Title>
          <div className="mt-1">
            برای ایجاد ویجت و مراحل راه اندازی به
            <Link url="https://raychat.io/" title="ایجاد حساب در رایچت" />
            و
            <Link
              url="https://raychat.io/documentation#introduction"
              title="راهنمای رسمی رایچت"
            />
            میتونی سر بزنی.
          </div>
        </Content>
        <Content>
          <Title>نکته</Title>
          <div className="mt-1">
            قبل از هر چیز لطفا توکن رایچت خودت رو در فایل
            <Code code="env." />
            در روت پروژه قرار بده.
          </div>
        </Content>
        <Content>
          <Title>بارگیری پیام های قدیمی کاربر</Title>
          <div className="mt-1">
            در صورتی که کاربر قبلا پیام ارسال کرده و آیدی اون کاربر به درستی
            وارد شده باشه، عملیات
            <Link
              url="https://raychat.io/documentation#load_user"
              title="loadUser"
            />
            به درستی اعمال میشه.
          </div>
          <Warning>
            درصورتی که آیدی کاربر وارد شده نادرست باشه، فقط با حذف Localstorage
            رایچت میتونه اجرا شه.
          </Warning>
          {currentRaychatUserId ? (
            <div className="mt-4">
              آیدی رایچت کاربر فعلی: <Code code={currentRaychatUserId} />
            </div>
          ) : null}
          <div className="flex gap-2 mt-4">
            <input
              className="border-2 border-gray-300 focus:outline-none focus:border-primary/20 rounded-lg px-2 py-1 text-right w-5/6 md:w-full"
              onChange={({ target: { value } }) => setUserId(value)}
              value={userId}
              placeholder="آیدی رایچت کاربر..."
            />
            <Button
              className="!w-40 md:w-max"
              disabled={!!!userId.length || !isTokenAvailable || !raychatReady}
              onClick={() => loadCustomUserMessages(userId)}
              title="بارگیری پیام ها"
            />
          </div>
        </Content>
        <Content>
          <Title>عملیات</Title>
          <div className="mt-1">
            در صورتی که ابزارک چت باز باشه و توکن موجود باشه، این تابع ها روی
            ابزارک اعمال میشن.
          </div>
        </Content>
        <ButtonsWrapper>
          <Button
            className="order-last md:order-first"
            onClick={clearLocalstorage}
            title="Localstorage حذف"
          />
          <Button
            disabled={!raychatReady}
            onClick={removeRaychatElements}
            title="حذف ویجت"
          />
          <Button
            disabled={!isTokenAvailable}
            onClick={restartRaychat}
            title="ریستارت"
          />
          <Button
            className="order-first md:order-last"
            disabled={!raychatReady}
            onClick={toggleWidget}
            title="نمایش / مخفی"
          />
        </ButtonsWrapper>
      </Card>
      <Developer />
    </Container>
  );
};

export default App;
