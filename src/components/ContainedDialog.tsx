import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const ContainedDialog = DialogPrimitive.Root;

const ContainedDialogTrigger = DialogPrimitive.Trigger;

const ContainedDialogClose = DialogPrimitive.Close;

// Custom Portal that renders in a specific container
const ContainedDialogPortal = ({ container, ...props }: DialogPrimitive.DialogPortalProps) => {
  const containerElement = React.useMemo(() => {
    if (container) return container as HTMLElement;
    // Find the phone screen container
    return document.querySelector('.phone-screen-container') as HTMLElement || document.body;
  }, [container]);

  return <DialogPrimitive.Portal container={containerElement} {...props} />;
};

const ContainedDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
ContainedDialogOverlay.displayName = "ContainedDialogOverlay";

const ContainedDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ContainedDialogPortal>
    <ContainedDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
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
