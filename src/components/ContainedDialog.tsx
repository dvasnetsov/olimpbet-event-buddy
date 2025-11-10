import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const ContainedDialog = DialogPrimitive.Root;
const ContainedDialogTrigger = DialogPrimitive.Trigger;
const ContainedDialogClose = DialogPrimitive.Close;

// Рендерим портал внутрь экрана телефона
const ContainedDialogPortal = ({
  container,
  ...props
}: DialogPrimitive.DialogPortalProps) => {
  const containerElement = React.useMemo(() => {
    if (container) return container as HTMLElement;
    return (
      (document.querySelector(".phone-screen-container") as HTMLElement) ||
      document.body
    );
  }, [container]);

  return <DialogPrimitive.Portal container={containerElement} {...props} />;
};

// Оверлей не закрывает нижнее меню
const ContainedDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      // Fullscreen overlay до nav bar
      "absolute inset-x-0 top-0 bottom-16 z-[60] " +
        "bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out " +
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
ContainedDialogOverlay.displayName = "ContainedDialogOverlay";

// Контент — фуллскрин в рамках экрана телефона, с зазором под нав-бар
const ContainedDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ContainedDialogPortal>
    <ContainedDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        // Fullscreen до nav bar
        "absolute inset-x-0 top-0 bottom-16 z-[60] " +
          "grid w-full h-auto translate-x-0 translate-y-0 gap-0 " +
          "bg-background p-0 border-0 shadow-lg sm:rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </ContainedDialogPortal>
));
ContainedDialogContent.displayName = "ContainedDialogContent";

export {
  ContainedDialog,
  ContainedDialogTrigger,
  ContainedDialogClose,
  ContainedDialogContent,
  ContainedDialogOverlay,
};
