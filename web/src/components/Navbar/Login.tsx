import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaUser } from "react-icons/fa"
import { SmallLink } from "./SmallLink"

export function Login() {
  return (
    <Dialog>
      <DialogTrigger className="focus:outline-none" asChild>
        <SmallLink onClick={() => {}} icon={<FaUser />} label="Login" />
      </DialogTrigger>
      <DialogContent className="bg-black border-gray-700 text-white min-w-2/3">
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>Sign in to your account</DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
