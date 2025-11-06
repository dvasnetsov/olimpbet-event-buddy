import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";

const ContainedDrawer = ({
  shouldScaleBackground = false,
  container,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  container?: HTMLElement | null;
}) => {
  const containerElement = React.useMemo(() => {
    if (container) return container;
    // Find the phone screen container
    return document.querySelector('.phone-screen-container') as HTMLElement;
  }, [container]);

  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      container={containerElement}
      {...props}
    />
  );
};
ContainedDrawer.displayName = "ContainedDrawer";

const ContainedDrawerTrigger = DrawerPrimitive.Trigger;

const ContainedDrawerPortal = DrawerPrimitive.Portal;

const ContainedDrawerClose = DrawerPrimitive.Close;

const ContainedDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
ContainedDrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const ContainedDrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ContainedDrawerPortal>
    <ContainedDrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[20px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </ContainedDrawerPortal>
));
ContainedDrawerContent.displayName = "ContainedDrawerContent";

const ContainedDrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
ContainedDrawerHeader.displayName = "ContainedDrawerHeader";

const ContainedDrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
ContainedDrawerFooter.displayName = "ContainedDrawerFooter";

const ContainedDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
ContainedDrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const ContainedDrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ContainedDrawerDescription.displayName =
  DrawerPrimitive.Description.displayName;

export {
  ContainedDrawer,
  ContainedDrawerPortal,
  ContainedDrawerOverlay,
  ContainedDrawerTrigger,
  ContainedDrawerClose,
  ContainedDrawerContent,
  ContainedDrawerHeader,
  ContainedDrawerFooter,
  ContainedDrawerTitle,
  ContainedDrawerDescription,
};
