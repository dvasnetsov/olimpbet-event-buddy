const PreviewPhoneLayout: React.FC = () => {
  const [mode, setMode] = useState<"intro" | "loading" | "main">("intro");

  const handleTelegramClick = () => {
    if (mode === "loading") return;
    setMode("loading");
    setTimeout(() => {
      setMode("main");
    }, 1500);
  };

  let content: React.ReactNode;
  if (mode === "intro") {
    content = <IntroScreen />;
  } else if (mode === "loading") {
    content = <LoadingScreenPreview />;
  } else {
    content = <DemoScreen />;
  }

  return <Layout onTelegramClick={handleTelegramClick}>{content}</Layout>;
};

// теперь по умолчанию экспортируем именно Layout,
// чтобы import Layout from "./components/Layout" работал
export default Layout;

// а превьюшку, если нужно, экспортируем ИМЕННО
export { PreviewPhoneLayout };
