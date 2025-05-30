import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import type { DialogStateType } from "@/types"

export function BookDialog({
  state,
  close,
}: {
  state: DialogStateType
  close: () => void
}) {
  return (
    <Dialog open={state.isOpen} onOpenChange={close}>
      <DialogContent
        className={cn(
          state.variant === "success"
            ? "bg-green-950 border-green-500"
            : "bg-red-950 border-red-500",
          "text-white"
        )}
      >
        <DialogHeader>
          <DialogTitle>
            {state.variant === "success" ? "¡Muchas gracias!" : "¡Lo sentimos!"}
          </DialogTitle>
          <DialogDescription className="text-white">
            {state.message}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
